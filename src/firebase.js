import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCH9WvMlkI9oRvOPEvIvPgcNQ73tjhOf-o",
    authDomain: "tinder-3fe10.firebaseapp.com",
    projectId: "tinder-3fe10",
    storageBucket: "tinder-3fe10.appspot.com",
    messagingSenderId: "764656232979",
    appId: "1:764656232979:web:8eb0f8f122bb91719e2de6",
    measurementId: "G-C6ZVFVN4MY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export const firestore = firebase.firestore();

export default database;