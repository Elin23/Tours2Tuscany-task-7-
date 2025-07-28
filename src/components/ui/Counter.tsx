'use client';
import React, { useEffect, useState } from 'react';

interface CounterProps {
    value: number;
    label: string;
    duration?: number; 
}

const Counter = ({ value, label, duration = 2000 }: CounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const incrementTime = duration / value;
        let currentCount = 0;
        const counterInterval = setInterval(() => {
            currentCount += 1;
            setCount(currentCount);

            if (currentCount >= value) {
                clearInterval(counterInterval);
            }
        }, incrementTime);

        return () => clearInterval(counterInterval);
    }, [value, duration]);

    return (
        <div className='w-[83px]'>
            <h3 className="text-[32px] font-bold text-orange">{count}+</h3>
            <p className="text-base text-gary-01 text-opacity-60">{label}</p>
        </div>
    );
};

export default Counter;
