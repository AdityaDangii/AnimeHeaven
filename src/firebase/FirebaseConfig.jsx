// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDHc23Pu-k8wikO8MXcBPfSek_ne8DAg",
  authDomain: "anime-heaven-6933d.firebaseapp.com",
  projectId: "anime-heaven-6933d",
  storageBucket: "anime-heaven-6933d.appspot.com",
  messagingSenderId: "84747332191",
  appId: "1:84747332191:web:cef573e9de0f4550f449ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth = getAuth(app);
export {fireDB , auth} 
