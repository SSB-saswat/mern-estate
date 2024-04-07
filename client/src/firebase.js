// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fca3c.firebaseapp.com",
  projectId: "mern-estate-fca3c",
  storageBucket: "mern-estate-fca3c.appspot.com",
  messagingSenderId: "716354974826",
  appId: "1:716354974826:web:ae8b7ede6dde6d7befc613",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
