import { useState, useEffect } from "react";
import { supabase } from "./lib/api";
import { Auth } from "./components/Auth";
import { Home } from "./components/Home";
import type { User } from "@supabase/supabase-js";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                const currentUser = session?.user;
                setUser(currentUser ?? null);
            }
        );

        return () => {
            authListener?.unsubscribe();
        };
    }, [user]);

    return (
        <div className="font-sans min-w-full min-h-screen flex items-center justify-center bg-gray-200">
            {!user ? <Auth /> : <Home />}
        </div>
    );
}

export default App;
