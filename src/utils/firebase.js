// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXay3_F4jgRO2gUUOQN7IosABEXyDbYhc",
  authDomain: "movies-gpt-2b160.firebaseapp.com",
  projectId: "movies-gpt-2b160",
  storageBucket: "movies-gpt-2b160.firebasestorage.app",
  messagingSenderId: "461663172411",
  appId: "1:461663172411:web:cc883d18fc0e2b2864e91e",
  measurementId: "G-NV3DMT79Q9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
