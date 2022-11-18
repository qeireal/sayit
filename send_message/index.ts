// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.0.0-rc.12";
import { corsHeaders } from "../_shared/cors.ts";

console.log(`Function "send-message" up and running!`);

const commonHeaders = {
    ...corsHeaders,
    "Content-Type": "application/json",
};

async function modelCall(message: string) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-offensive",
        {
            headers: {
                Authorization: `Bearer ${Deno.env.get(
                    "HUGGING_FACE_API_TOKEN"
                )}`,
            },
            method: "POST",
            body: JSON.stringify({
                inputs: message,
                options: {
                    wait_for_model: true,
                },
            }),
        }
    );
    const result = await response.json();
    return result;
}

serve(async (req: Request) => {
    // This is needed if you're planning to invoke your function from a browser.
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // Set the Auth context of the user that called the function.
        // This way your row-level-security (RLS) policies are applied.
        const supabaseClient = createClient(
            // Supabase API URL - env var exported by default.
            Deno.env.get("SUPABASE_URL") ?? "",
            // Supabase API ANON KEY - env var exported by default.
            Deno.env.get("SUPABASE_ANON_KEY") ?? "",
            // Create client with Auth context of the user that called the function.
            // This way your row-level-security (RLS) policies are applied.
            {
                global: {
                    headers: {
                        Authorization: req.headers.get("Authorization")!,
                    },
                },
            }
        );

        // Now we can get the session or user object
        const {
            data: { user },
        } = await supabaseClient.auth.getUser();

        if (!user) {
            throw new Error("Bad authorization");
        }

        const body = await req.text();
        const result = await modelCall(body);

        const offensivenessEntity = result[0].find(
            (entity: { label: string; score: number }) =>
                entity["label"] === "LABEL_1"
        );
        const offensivenessRatio = offensivenessEntity.score;

        const previousDataResponse = await supabaseClient
            .from("scoreboard")
            .select("*")
            .eq("user_id", user["id"]);

        const { data: previousData, error: previousError } =
            previousDataResponse;
        const previousResult = previousData?.at(0);

        if (previousResult?.result > offensivenessRatio) {
            return new Response(
                JSON.stringify({ data: previousResult, error: previousError }),
                {
                    headers: commonHeaders,
                    status: 200,
                }
            );
        }

        const baseResponse = await supabaseClient
            .from("scoreboard")
            .upsert(
                {
                    user_id: user["id"],
                    text: body,
                    result: offensivenessRatio,
                    name: user["user_metadata"]["user_name"],
                },
                {
                    onConflict: "user_id",
                }
            )
            .select()
            .single();

        const { data, error } = baseResponse;

        console.log("=> Base upsert result: ", { data, error });

        return new Response(JSON.stringify({ data, error }), {
            headers: commonHeaders,
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: commonHeaders,
            status: 400,
        });
    }
});
