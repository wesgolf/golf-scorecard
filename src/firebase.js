// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2rsD3bHEWOr-t5iuPyROFWobEjobNThs",
  authDomain: "react-golf-app-699bf.firebaseapp.com",
  projectId: "react-golf-app-699bf",
  storageBucket: "react-golf-app-699bf.appspot.com",
  messagingSenderId: "881386814082",
  appId: "1:881386814082:web:b7ced0421bf34a88f8129b",
  measurementId: "G-EKY5XD3VY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

const auth = getAuth(app)
export {auth}
export {db}
