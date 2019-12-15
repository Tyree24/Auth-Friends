import React, { useState } from 'react';

const loginStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};


function Login() {
    const [credentials, setCredentials] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
        <div className="login" style={loginStyles}>
            <h2>Login</h2>
        </div>
    );
}

export default Login;