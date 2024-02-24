// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAucoMHIB2Il5Vo9fuimi4udTRtUYcBJ2I",
  authDomain: "account-control-e5280.firebaseapp.com",
  projectId: "account-control-e5280",
  storageBucket: "account-control-e5280.appspot.com",
  messagingSenderId: "787097585641",
  appId: "1:787097585641:web:39542c8ad8a0319d2d2d78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
