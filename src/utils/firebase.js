// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjfEk7uzRAgIliGNfgv_NYLWldQkFufYY",
  authDomain: "movie-recommedation-ef1c1.firebaseapp.com",
  projectId: "movie-recommedation-ef1c1",
  storageBucket: "movie-recommedation-ef1c1.appspot.com",
  messagingSenderId: "735117565949",
  appId: "1:735117565949:web:a4a14ae0821ba4bc0e0394",
  measurementId: "G-CMKHFHTFQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getAuth
export const auth = getAuth()