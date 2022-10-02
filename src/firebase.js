// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_PhO72x-Zi63OO2LO7gRjsz4AMiVeCfg",
  authDomain: "goldfieldsvillas-b2814.firebaseapp.com",
  databaseURL: "https://goldfieldsvillas-b2814-default-rtdb.firebaseio.com",
  projectId: "goldfieldsvillas-b2814",
  storageBucket: "goldfieldsvillas-b2814.appspot.com",
  messagingSenderId: "487020874394",
  appId: "1:487020874394:web:3228b12e29c57c72b72d23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
