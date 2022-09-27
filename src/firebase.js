// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMa5FJvhgmff2J5lnKCKhB51x2eNV5hEw",
  authDomain: "goldfieldsvillas.firebaseapp.com",
  projectId: "goldfieldsvillas",
  storageBucket: "goldfieldsvillas.appspot.com",
  messagingSenderId: "951709672924",
  appId: "1:951709672924:web:6d10836a3e36f7a2f4db19",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;