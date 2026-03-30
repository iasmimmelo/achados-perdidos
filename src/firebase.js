import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiQDVUa-i-P_WeHL5dWX-7DuWbOiokHTE",
  authDomain: "achados-63fa0.firebaseapp.com",
  projectId: "achados-63fa0",
  storageBucket: "achados-63fa0.firebasestorage.app",
  messagingSenderId: "5432322130",
  appId: "1:5432322130:web:08ba68234b6349a4c8978b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);