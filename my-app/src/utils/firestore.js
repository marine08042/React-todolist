import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_jNz-U9dz6tXAASKMDJMWhHXweVesaUc",
  authDomain: "todo-91a56.firebaseapp.com",
  projectId: "todo-91a56",
  storageBucket: "todo-91a56.appspot.com",
  messagingSenderId: "1062185543640",
  appId: "1:1062185543640:web:b77254d01f25a37c7074ad"
};

const TODO = initializeApp(firebaseConfig);
const db = getFirestore(TODO);

export { db };
