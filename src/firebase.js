// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_ifMg6obK5u07HJVfjJy22DBDgGoIpmc",
  authDomain: "museek-da659.firebaseapp.com",
  projectId: "museek-da659",
  storageBucket: "museek-da659.firebasestorage.app",
  messagingSenderId: "530975522796",
  appId: "1:530975522796:web:156569d145591f5bcccac9",
  measurementId: "G-VK66L581M1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // ✅ use this
