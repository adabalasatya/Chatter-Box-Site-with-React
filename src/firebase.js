
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCxontPyZ2Ej9VQfZgDlfbue0Dnn9eI1Hs",
  authDomain: "chatter-box-1e0fb.firebaseapp.com",
  projectId: "chatter-box-1e0fb",
  storageBucket: "chatter-box-1e0fb.appspot.com",
  messagingSenderId: "379041880537",
  appId: "1:379041880537:web:4b06f4de24fdc262b6a1c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db =  getFirestore();
export const storage = getStorage();


