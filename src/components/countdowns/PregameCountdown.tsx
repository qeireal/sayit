import { useEffect } from "react";
import { useCountdown } from "../../hooks/useCountdown";

export type PregameCountdownProps = {
    callback: () => void;
};

export function PregameCountdown(props: PregameCountdownProps) {
    const { callback } = props;

    const counter = useCountdown(3);

    useEffect(() => {
        if (counter === 0) {
            callback();
        }
    }, [counter, callback]);

    if (counter < 0) {
        return null;
    }

    return (
        <div className="absolute z-40 text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {counter > 0 ? `${counter}` : "Say it!"}
        </div>
    );
}
