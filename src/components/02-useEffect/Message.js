import React, { useEffect } from 'react';

const Message = () => {
    useEffect(() => {
        const mouseM = (e) => {
            console.log(':V');
        };
        window.addEventListener('mousemove', mouseM);
        return () => {
            window.removeEventListener('mousemove', mouseM);
        };
    }, []);

    return (
        <div>
            <h3>You're great!</h3>
        </div>
    );
};

export default Message;
