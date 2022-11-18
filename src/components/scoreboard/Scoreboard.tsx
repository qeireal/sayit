import { useEffect, useState } from "react";
import { supabase } from "../../lib/api";
import { ScoreboardItem, ScoreboardItemModel } from "./ScoreboardItem";

export function ScoreBoard(): JSX.Element {
    const [items, setItems] = useState<ScoreboardItemModel[]>([]);

    useEffect(() => {
        fetchScoreboard().catch(console.error);
    }, []);

    const fetchScoreboard = async () => {
        let { data: items, error } = await supabase
            .from("scoreboard")
            .select("*")
            .order("result", { ascending: false });
        if (error) console.log("error", error);
        else setItems(items as ScoreboardItemModel[]);
    };

    return (
        <>
            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <table className="table-fixed w-full">
                                        <thead>
                                            <tr>
                                                <th>Position</th>
                                                <th>Name</th>
                                                <th>Best score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.length ? (
                                                items.map((item, index) => (
                                                    <ScoreboardItem
                                                        key={item.id}
                                                        item={{
                                                            ...item,
                                                            position: index + 1,
                                                        }}
                                                    />
                                                ))
                                            ) : (
                                                <tr className="h-full flex justify-center items-center">
                                                    <td>
                                                        No participants yet!
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => window.location.reload()}
                                >
                                    Try again!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
