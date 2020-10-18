import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {
    const { state: counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(2)}>
                +1
            </button>
            <button className="btn btn-secondary" onClick={() => decrement(2)}>
                -1
            </button>
            <button className="btn btn-secondary" onClick={reset}>
                Reset
            </button>
        </>
    );
};

export default CounterWithCustomHook;
