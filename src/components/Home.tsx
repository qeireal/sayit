import avatarSrc from "./avatar.webp";
import { IngameCountdown } from "./countdowns/IngameCountdown";
import { PersonalScore } from "./scoreboard/PersonalScore";
import { PregameCountdown } from "./countdowns/PregameCountdown";
import { ScoreBoard } from "./scoreboard/Scoreboard";
import { getBossMessage } from "../lib/bossMessages";
import { supabase } from "../lib/api";
import { useState, useRef } from "react";

enum GamePhase {
    preparing = 0,
    active = 1,
    result = 2,
    scoreboard = 3,
}

export function Home() {
    const [currentPhase, setCurrentPhase] = useState<GamePhase>(
        GamePhase.preparing
    );
    const newMessageTextRef = useRef<HTMLInputElement>(null);
    const [userScore, setUserScore] = useState<number | null>(null);
    const [errorText, setError] = useState<string | null>("");

    const bossMessage = useRef(getBossMessage());

    const sendMessage = async () => {
        if (currentPhase !== GamePhase.active) {
            return;
        }

        let messageText = newMessageTextRef.current!.value;
        let message = messageText.trim();
        if (message.length <= 3) {
            setError("Message length should be more than 3!");
        } else {
            setCurrentPhase(GamePhase.result);

            const response = await supabase.functions.invoke("send_message", {
                body: message,
            });

            if (!response || response.error) {
                setError(response.error.message);
            }

            const {
                data: { data, error },
            } = response;

            setUserScore(data.result);

            if (error) {
                setError(error.message);
            } else {
                setError(null);
                newMessageTextRef.current!.value = "";
            }
        }
    };

    const isCurrentPhase = (phase: GamePhase) => {
        return currentPhase === phase;
    };

    const handleLogout = async () => {
        supabase.auth.signOut().catch(console.error);
    };

    return (
        <div className="w-screen fixed flex flex-col min-h-screen bg-gray-50">
            {isCurrentPhase(GamePhase.result) && (
                <PersonalScore
                    scoreValue={userScore}
                    callback={() => setCurrentPhase(GamePhase.scoreboard)}
                />
            )}
            {isCurrentPhase(GamePhase.scoreboard) && <ScoreBoard />}

            <PregameCountdown
                callback={() => setCurrentPhase(GamePhase.active)}
            />

            <header className="flex justify-between items-center px-4 h-16 bg-gray-900">
                <span className="text-2xl sm:text-4xl text-white border-b font-sans">
                    Say It!
                </span>

                {isCurrentPhase(GamePhase.active) && (
                    <IngameCountdown
                        callback={() => setCurrentPhase(GamePhase.scoreboard)}
                    />
                )}

                <div className="flex flex-row gap-x-4">
                    <button
                        onClick={() => setCurrentPhase(GamePhase.scoreboard)}
                        className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-green-700 transition duration-150 ease-in-out"
                    >
                        Scoreboard
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-green-700 transition duration-150 ease-in-out"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="px-6 py-4 flex flex-1 overflow-y-scroll flex-col justify-end">
                <div className="flex items-start mb-4 text-sm">
                    <img
                        src={avatarSrc}
                        className="w-10 h-10 rounded mr-3"
                        alt="Your boss avatar"
                    />
                    <div className="flex-1 overflow-hidden">
                        <div>
                            <span className="font-bold">Best Boss</span>
                            <span className="text-grey text-xs">
                                &nbsp;12:46
                            </span>
                        </div>
                        <p className="text-black leading-normal">
                            <span className="inline-block text-blue-500">
                                @You&nbsp;
                            </span>
                            {bossMessage.current}
                        </p>
                    </div>
                </div>

                {!!errorText && (
                    <div
                        className={
                            "border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"
                        }
                    >
                        {errorText}
                    </div>
                )}
            </div>

            <div className="pb-6 px-4 flex-none">
                <div className="flex rounded-lg border-2 border-grey overflow-hidden">
                    <input
                        ref={newMessageTextRef}
                        type="text"
                        placeholder="Send message"
                        onKeyUp={(e) => e.key === "Enter" && sendMessage()}
                        disabled={!isCurrentPhase(GamePhase.active)}
                        className="w-full px-4 text-lg text-grey border-r-2 border-grey p-2"
                    />
                </div>
            </div>
        </div>
    );
}
