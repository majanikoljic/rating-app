import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBguIJdhARMyra-M8x-x4O_YAxU5OyWvPg",
    authDomain: "starratingapp-4d76a.firebaseapp.com",
    projectId: "starratingapp-4d76a",
    storageBucket: "starratingapp-4d76a.firebasestorage.app",
    messagingSenderId: "374012758974",
    appId: "1:374012758974:web:879281651888a0da90c7ef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };





