// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-iq-c9f22.firebaseapp.com",
  projectId: "interview-iq-c9f22",
  storageBucket: "interview-iq-c9f22.firebasestorage.app",
  messagingSenderId: "1048827134764",
  appId: "1:1048827134764:web:d3f21d4fd77659f42d6289",
  measurementId: "G-DWL2R2Y8HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}