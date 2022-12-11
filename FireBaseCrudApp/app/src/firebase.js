import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crudapp-2f044.firebaseapp.com",
  projectId: "crudapp-2f044",
  storageBucket: "crudapp-2f044.appspot.com",
  messagingSenderId: "352539039987",
  appId: "1:352539039987:web:93bf3732cf78b68006bf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()