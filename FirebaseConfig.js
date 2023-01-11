// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjC5Ejj9Wjxj4Q1qeNj2srvUgj0S1EayA",
  authDomain: "react-fire-chat-fcf23.firebaseapp.com",
  projectId: "react-fire-chat-fcf23",
  storageBucket: "react-fire-chat-fcf23.appspot.com",
  messagingSenderId: "1005173224306",
  appId: "1:1005173224306:web:06b940304f96c9497a23eb",
  measurementId: "G-78ZFBZD11W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
