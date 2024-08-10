// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd4DWsemwYH2zynZkqT_ZZxSUTMq50ZS0",
  authDomain: "disaster-management-2bbc4.firebaseapp.com",
  projectId: "disaster-management-2bbc4",
  storageBucket: "disaster-management-2bbc4.appspot.com",
  messagingSenderId: "143947123880",
  appId: "1:143947123880:web:f8fc963898703874c8869d",
  measurementId: "G-TKPWVS4VRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Auth (if needed)
const auth = getAuth(app);
export { db, auth };