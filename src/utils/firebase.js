import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuZVv-zSy9YWJxG4gPDQUTlxY_m2Uq1qo",
    authDomain: "react-todo-list-954b7.firebaseapp.com",
    projectId: "react-todo-list-954b7",
    storageBucket: "react-todo-list-954b7.appspot.com",
    messagingSenderId: "86740801659",
    appId: "1:86740801659:web:852d039511a1e7147caade",
    measurementId: "G-Z0M46V7456"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };