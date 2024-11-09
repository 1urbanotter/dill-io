// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIoF8tjk_qtGwtsZ47LgcZ2pbGraGcd4A",
  authDomain: "dill-io-app-ec3f2.firebaseapp.com",
  projectId: "dill-io-app-ec3f2",
  storageBucket: "dill-io-app-ec3f2.firebasestorage.app",
  messagingSenderId: "858089645833",
  appId: "1:858089645833:web:a31337279e35065a0e95d8",
  measurementId: "G-WV26BEB1TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
