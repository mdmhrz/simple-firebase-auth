import React from 'react';

const Login = () => {
    const handleGoogleSignIn = () => {
        console.log('Sign In button clicked');
    }

    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default Login;