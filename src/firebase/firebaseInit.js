import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { defaults } from "autoprefixer";


const firebaseConfig = {
  apiKey: "AIzaSyBV2vsvZqpxFPOWzs3xU9nZNJHrEMGrXX4",
  authDomain: "details-8541d.firebaseapp.com",
  projectId: "details-8541d",
  storageBucket: "details-8541d.appspot.com",
  messagingSenderId: "178479640015",
  appId: "1:178479640015:web:1cbc108753885badbb36ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);



