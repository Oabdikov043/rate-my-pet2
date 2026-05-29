// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import page from "page";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5do4Ha41Op9m0d_BsfF3aD4yAZuNMLN4",
  authDomain: "rate-my-pet-87c4f.firebaseapp.com",
  projectId: "rate-my-pet-87c4f",
  storageBucket: "rate-my-pet-87c4f.firebasestorage.app",
  messagingSenderId: "768851027940",
  appId: "1:768851027940:web:8f2e0ebe45abb3e497c9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Refresh the current page to get the async persistance
    page.redirect(location.pathname);
  })
  .catch((error) => {
    console.error(`Persistance Error: ${error.message}`);
  });

export default app;
