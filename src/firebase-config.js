import { initializeApp } from "firebase/app";
import { getFirestore, FieldValue } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdBOoZKAAXV4UgX-PNzrKuSTDBn9gApXc",
  authDomain: "likeable-b186c.firebaseapp.com",
  projectId: "likeable-b186c",
  storageBucket: "likeable-b186c.appspot.com",
  messagingSenderId: "211822163408",
  appId: "1:211822163408:web:0cb91760cc8f3cff4835d5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const increment = FieldValue.increment;
