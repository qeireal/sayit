import { useEffect } from "react";
import { useCountdown } from "../../hooks/useCountdown";

export type IngameCountdownProps = {
    callback: () => void;
};

export function IngameCountdown(props: IngameCountdownProps) {
    const { callback } = props;

    const counter = useCountdown(15);

    useEffect(() => {
        if (counter === 0) {
            callback();
        }
    }, [counter, callback]);

    if (counter > 0) {
        return (
            <div className="text-green-400 text-xl font-bold">{counter}</div>
        );
    }

    return null;
}
