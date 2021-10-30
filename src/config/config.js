// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaYOw-ICDkdcj4t-30Rwl4EjgyH3skPo4",
  authDomain: "rxting-41e9f.firebaseapp.com",
  projectId: "rxting-41e9f",
  storageBucket: "rxting-41e9f.appspot.com",
  messagingSenderId: "377603182339",
  appId: "1:377603182339:web:d7cfc81a2fe60dc527a336",
  measurementId: "G-X19T2125DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);