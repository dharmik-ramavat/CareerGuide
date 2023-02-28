// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFLiikpExiTo6f2MW8i7-1YCputYi78LI",
  authDomain: "careerguide-d3dab.firebaseapp.com",
  projectId: "careerguide-d3dab",
  storageBucket: "careerguide-d3dab.appspot.com",
  messagingSenderId: "515691673808",
  appId: "1:515691673808:web:ed4d81354668fc3469c6d5",
  measurementId: "G-WC79MRGV90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();