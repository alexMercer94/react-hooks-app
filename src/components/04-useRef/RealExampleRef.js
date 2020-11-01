import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import MultpleCustomHooks from '../03-examples/MultpleCustomHooks';

const RealExampleRef = () => {
    const [show, setshow] = useState(false);

    return (
        <div>
            <h1>Real example Ref</h1>
            <hr />
            {show && <MultpleCustomHooks />}
            <button className="btn btn-primary mt-5" onClick={() => setshow(!show)}>
                Show/Hide
            </button>
        </div>
    );
};

export default RealExampleRef;
