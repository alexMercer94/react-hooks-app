import React, { useEffect } from 'react';

const Message = () => {
    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
        };
    }, []);

    return (
        <div>
            <h3>You're great!</h3>
        </div>
    );
};

export default Message;
