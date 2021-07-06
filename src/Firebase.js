import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBuSU7Hq-Myn2sopMMSouyI7OWLCU_b-V8",
    authDomain: "react-spa-66c62.firebaseapp.com",
    databaseURL: "https://react-spa-66c62.firebaseio.com",
    projectId: "react-spa-66c62",
    storageBucket: "react-spa-66c62.appspot.com",
    messagingSenderId: "883758846066",
    appId: "1:883758846066:web:c01c16ef734e8a5626b2eb",
    measurementId: "G-BKHXVFXVPS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = new firebase.auth();
export default firebase;