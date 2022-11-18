import { useEffect, useState } from "react";

const useCountdown = (secs: number) => {
    const [countDown, setCountDown] = useState(secs);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDown - 1);

            if (countDown === 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);

    return countDown;
};

export { useCountdown };
