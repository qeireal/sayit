import type { Provider } from "@supabase/supabase-js";
import { supabase } from "../lib/api";
import {
    REACT_APP_SUPABASE_KEY,
    REACT_APP_SUPABASE_URL,
} from "../lib/constants";

export function Auth() {
    const handleOAuthLogin = async (provider: Provider) => {
        // You need to enable the third party auth you want in Authentication > Settings
        // Read more on: https://supabase.com/docs/guides/auth#third-party-logins
        let { error } = await supabase.auth.signIn({ provider });
        if (error) console.log("Error: ", error.message);
    };

    return !REACT_APP_SUPABASE_URL || !REACT_APP_SUPABASE_KEY ? (
        <p>There is no api key and url</p>
    ) : (
        <div
            className={
                "w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base"
            }
        >
            <span
                className={
                    "font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center"
                }
            >
                Say It!
            </span>

            <div className="mt-3">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full mx-1.5 border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 bg-white text-gray-500">
                            Login with
                        </span>
                    </div>
                </div>

                <div>
                    <div className="mt-3">
                        <span className="block rounded-md shadow-sm">
                            <button
                                onClick={() => handleOAuthLogin("github")}
                                type="button"
                                className="w-3/4 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-green-700 transition duration-150 ease-in-out"
                            >
                                GitHub
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
