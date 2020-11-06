import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(0);
    /* 
    const increment = () => {
        setCounter(counter + 1);
    };
 */
    const increment = useCallback(() => {
        setCounter((c) => c + 1);
    }, [setCounter]);

    return (
        <div>
            <h1>Use callback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    );
};

export default CallbackHook;
