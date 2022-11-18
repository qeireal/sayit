export type PregameCountdownProps = {
    scoreValue: number | null;
    callback: () => void;
};

export function PersonalScore(props: PregameCountdownProps): JSX.Element {
    const { scoreValue, callback } = props;

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
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-2xl">
                            {scoreValue ? (
                                <>
                                    <span className="svg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="firework-slide2"
                                            className="firework-icon injected-svg img-firework inject-svg"
                                            data-name="Calque 1"
                                            viewBox="0 0 157 156"
                                        >
                                            <path
                                                className="cls-3"
                                                d="M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"
                                            ></path>
                                            <path
                                                className="cls-3"
                                                d="M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"
                                            ></path>

                                            <path
                                                className="cls-2"
                                                d="M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"
                                            ></path>
                                            <path
                                                className="cls-2"
                                                d="M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"
                                            ></path>

                                            <path
                                                className="cls-1"
                                                d="M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"
                                            ></path>
                                            <path
                                                className="cls-1"
                                                d="M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"
                                            ></path>
                                        </svg>
                                        <div>
                                            Congratulations! Your score:{" "}
                                            <b>{scoreValue}</b>
                                        </div>
                                    </span>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => callback()}
                                        >
                                            Scoreboard
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() =>
                                                window.location.reload()
                                            }
                                        >
                                            Try again!
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="flex items-center flex-col justify-between">
                                        <svg
                                            version="1.1"
                                            id="L2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 100 100"
                                            width="100"
                                            enableBackground="new 0 0 100 100"
                                            xmlSpace="preserve"
                                        >
                                            <circle
                                                fill="none"
                                                stroke="#059669"
                                                strokeWidth="4"
                                                strokeMiterlimit="10"
                                                cx="50"
                                                cy="50"
                                                r="48"
                                            />
                                            <line
                                                fill="none"
                                                strokeLinecap="round"
                                                stroke="#059669"
                                                strokeWidth="4"
                                                strokeMiterlimit="10"
                                                x1="50"
                                                y1="50"
                                                x2="85"
                                                y2="50.5"
                                            >
                                                <animateTransform
                                                    attributeName="transform"
                                                    dur="2s"
                                                    type="rotate"
                                                    from="0 50 50"
                                                    to="360 50 50"
                                                    repeatCount="indefinite"
                                                />
                                            </line>
                                            <line
                                                fill="none"
                                                strokeLinecap="round"
                                                stroke="#059669"
                                                strokeWidth="4"
                                                strokeMiterlimit="10"
                                                x1="50"
                                                y1="50"
                                                x2="49.5"
                                                y2="74"
                                            >
                                                <animateTransform
                                                    attributeName="transform"
                                                    dur="15s"
                                                    type="rotate"
                                                    from="0 50 50"
                                                    to="360 50 50"
                                                    repeatCount="indefinite"
                                                />
                                            </line>
                                        </svg>
                                        <p>Boss is reading your message...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
