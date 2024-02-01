// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Example: Get a reference to the database service
var database = firebase.database();

const apiKey = process.env.API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "imagedisplayai.firebaseapp.com",
  projectId: "imagedisplayai",
  storageBucket: "imagedisplayai.appspot.com",
  messagingSenderId: "309268568822",
  appId: "1:309268568822:web:ffef658d0514329425ead7",
  measurementId: "G-7ZWK9EDSLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);