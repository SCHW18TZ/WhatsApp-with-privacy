import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXLHaAD-zdcbnm7F4kdxCzf9uwTF0x5UI",
  authDomain: "whatsup-with-privacy.firebaseapp.com",
  projectId: "whatsup-with-privacy",
  storageBucket: "whatsup-with-privacy.appspot.com",
  messagingSenderId: "955393271747",
  appId: "1:955393271747:web:28ca1f8988d9fe60927f76",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
