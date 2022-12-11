import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebase = {
    apiKey: "AIzaSyCGfyXG8N0VNZMQWVoG7N60eLpz8fSqCh8",
  authDomain: "sign-in-2e904.firebaseapp.com",
  projectId: "sign-in-2e904",
  storageBucket: "sign-in-2e904.appspot.com",
  messagingSenderId: "1068515003415",
  appId: "1:1068515003415:web:89bc31158c9b62fc22a052"
};

const app = initializeApp(firebase);


export const authentication = getAuth();