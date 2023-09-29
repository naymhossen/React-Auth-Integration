// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzai3BilP8P5eFdHaW-Sb33TJJoNZhaVc",
  authDomain: "react-auth-integration-e1909.firebaseapp.com",
  projectId: "react-auth-integration-e1909",
  storageBucket: "react-auth-integration-e1909.appspot.com",
  messagingSenderId: "1084915378297",
  appId: "1:1084915378297:web:38f62f8bd082a3e028cca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;