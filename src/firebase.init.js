// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-P0QEKc9h6ZqkMg9na87enrTO1JI3y60",
    authDomain: "ema-john-simple-9015d.firebaseapp.com",
    projectId: "ema-john-simple-9015d",
    storageBucket: "ema-john-simple-9015d.appspot.com",
    messagingSenderId: "81265693547",
    appId: "1:81265693547:web:b8207b669cd743f434322e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;