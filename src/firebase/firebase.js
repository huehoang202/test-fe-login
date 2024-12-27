import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA5C3_QB12KNQPmZ7t-FYHc_RXC0uFVK0k",
//   authDomain: "melofi-dev.firebaseapp.com",
//   projectId: "melofi-dev",
//   storageBucket: "melofi-dev.firebasestorage.app",
//   messagingSenderId: "899930382462",
//   appId: "1:899930382462:web:3fab2664f1cdae7e32382f",
//   measurementId: "G-XSB5KV52QC"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6r8JBA0vB-McnT-J3ePIoB3wFb5dFRt4",
  authDomain: "test-firebase-a27a4.firebaseapp.com",
  projectId: "test-firebase-a27a4",
  storageBucket: "test-firebase-a27a4.firebasestorage.app",
  messagingSenderId: "1077811788632",
  appId: "1:1077811788632:web:3742ec161d858e7adf832d",
  measurementId: "G-KPMSENW9XK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
