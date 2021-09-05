import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => setUser({ id: 32534, name: 'Alex' })}>
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
