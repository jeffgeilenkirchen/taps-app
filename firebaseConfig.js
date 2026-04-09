// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "taps-app-aa7b5.firebaseapp.com",
  projectId: "taps-app-aa7b5",
  storageBucket: "taps-app-aa7b5.firebasestorage.app",
  messagingSenderId: "262698588957",
  appId: "1:262698588957:web:e22fcd7af21ef2c902dff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);