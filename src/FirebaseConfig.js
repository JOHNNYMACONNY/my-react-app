// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCUI7GZa9aY8tGZhbUp_igK--V6uMqMWY",
  authDomain: "tradeya-2.firebaseapp.com",
  projectId: "tradeya-2",
  storageBucket: "tradeya-2.firebasestorage.app",
  messagingSenderId: "374336099348",
  appId: "1:374336099348:web:536a0bc7c671bae8050301",
  measurementId: "G-XJ6QL2XPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
