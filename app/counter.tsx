"use client";

import SecondCount from "./secondCount";
import { useCounter } from "./useCounter";

export default function Counter() {
    const {count, addCount} = useCounter();
    return (
        <>
            <h1>{count}</h1>
            <button onClick={addCount}>Click</button>

            <SecondCount />
        </>
    );
}