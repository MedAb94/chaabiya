// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp-nz9g-bytkWOWoS7GIfQsjugHkZzj_A",
    authDomain: "chaabiya-d7fdd.firebaseapp.com",
    projectId: "chaabiya-d7fdd",
    storageBucket: "chaabiya-d7fdd.appspot.com",
    messagingSenderId: "190107673865",
    appId: "1:190107673865:web:5037ae5550d300ea645fd8",
    measurementId: "G-7R79LKHQPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};