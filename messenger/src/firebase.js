// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1RCBZMX-4lqVpKHv3cKF3GGBzeCwQmPQ",
    authDomain: "sociala-9e839.firebaseapp.com",
    projectId: "sociala-9e839",
    storageBucket: "sociala-9e839.appspot.com",
    messagingSenderId: "1069104239683",
    appId: "1:1069104239683:web:f95c59c8a65759f90d30f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };