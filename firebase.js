// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCial3R1Hzu7ZBUXj9euH-gfpnShK0nlXU",
  authDomain: "portfolio-9758f.firebaseapp.com",
  projectId: "portfolio-9758f",
  storageBucket: "portfolio-9758f.appspot.com",
  messagingSenderId: "89578250255",
  appId: "1:89578250255:web:531fb7f43c6aef80ff037a",
  measurementId: "G-1937SPM74C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);