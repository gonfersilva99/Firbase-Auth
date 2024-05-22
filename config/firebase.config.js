import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6mbGed8NVK0YNMUhCJ2paz_uMhYMfPWk",
  authDomain: "consultoriosilva-f8727.firebaseapp.com",
  projectId: "consultoriosilva-f8727",
  storageBucket: "consultoriosilva-f8727.appspot.com",
  messagingSenderId: "790803907908",
  appId: "1:790803907908:web:66404b184e0ce725d54311",
  measurementId: "G-YYKD5BVC43",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
