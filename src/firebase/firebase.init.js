// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9r3NCSqyUopfT5QpLRbJYGNa7ovnm3CY",
    authDomain: "simple-firebase-auth-f1f53.firebaseapp.com",
    projectId: "simple-firebase-auth-f1f53",
    storageBucket: "simple-firebase-auth-f1f53.firebasestorage.app",
    messagingSenderId: "268585510996",
    appId: "1:268585510996:web:950ee3708b5d6b6e9ee5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);