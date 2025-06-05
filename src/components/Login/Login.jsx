import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Sign In button clicked');
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <h2>Please Log in</h2>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default Login;