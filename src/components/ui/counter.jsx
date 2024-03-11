import { useState, useEffect } from 'react';

const Counter = ({ targetNumber }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval;
        const startCounting = () => {
            let currentCount = 0;
            interval = setInterval(() => {
                currentCount += Math.ceil(targetNumber / 100);
                if (currentCount >= targetNumber) {
                    clearInterval(interval);
                    currentCount = targetNumber;
                }
                setCount(currentCount);
            }, 20);
        };

        startCounting();

        return () => clearInterval(interval);
    }, [targetNumber]);

    return <>{count.toLocaleString()}</>;
};

export default Counter;
