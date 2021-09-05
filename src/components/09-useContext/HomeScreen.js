import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const HomeScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 3)}</pre>
        </div>
    );
};

export default HomeScreen;
