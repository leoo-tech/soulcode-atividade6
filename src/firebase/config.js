import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBBOMMMBxR2srhMSk80-cxWRGjnnS5GFD0",
    authDomain: "semana-6-catalogos.firebaseapp.com",
    projectId: "semana-6-catalogos",
    storageBucket: "semana-6-catalogos.appspot.com",
    messagingSenderId: "382144805963",
    appId: "1:382144805963:web:edcfc3f97c52810f04e1ce"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
