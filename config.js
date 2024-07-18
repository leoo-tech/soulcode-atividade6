import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMKAx-vpMof4iKYclNYP0ZuXmYnw5WcC0",
  authDomain: "my-task-c55a9.firebaseapp.com",
  projectId: "my-task-c55a9",
  storageBucket: "my-task-c55a9.appspot.com",
  messagingSenderId: "1094437628957",
  appId: "1:1094437628957:web:bbc0041d1d3fb150df2af4"
};

// app -> objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db = data base, mas pode ser qualquer nome que faça sentido
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);