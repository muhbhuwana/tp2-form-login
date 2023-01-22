import { useState, useEffect } from 'react';

export function useCounter(initialCount) {
    const [timeLeft, setTimeLeft] = useState(initialCount);
    const [timerId, setTimerId] = useState(null);
  
    const startTimer = () => {
        clearInterval(timerId);
        setTimeLeft(initialCount);
        const id = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft === 0) {
                  clearInterval(id);
                  return initialCount;
                }
                return timeLeft - 1;
            });
        }, 1000);
        setTimerId(id);
    };
  
    useEffect(() => {
        return () => clearInterval(timerId);
    }, []);
  
    return [timeLeft, startTimer];
}
