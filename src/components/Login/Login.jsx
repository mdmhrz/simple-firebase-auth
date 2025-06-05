import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Sign In button clicked');
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res.user);
                setUser(res.user)

            }).catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out completed");
            setUser(null)
        }).catch(error => {
            console.log(error);
        })
    }

    const handleSignInWithGithub = () => {
        console.log('gitHub paoa geche');
        signInWithPopup(auth, githubProvider).then(res => {
            console.log(res);
            setUser(res.user)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <h2>Please Log in</h2>
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> : <><button onClick={handleGoogleSignIn}>Sign In with Google</button><button onClick={handleSignInWithGithub}>SignIn with GitHub </button></>
            }


            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;