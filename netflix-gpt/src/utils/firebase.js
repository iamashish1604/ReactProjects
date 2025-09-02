// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB0GrewIYV4-qh_-hoyf5qRLlfghYQPRs",
  authDomain: "netflixgpt-63c07.firebaseapp.com",
  projectId: "netflixgpt-63c07",
  storageBucket: "netflixgpt-63c07.firebasestorage.app",
  messagingSenderId: "1050219367043",
  appId: "1:1050219367043:web:503a6831818043fb0929b6",
  measurementId: "G-SY9QCC912G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();