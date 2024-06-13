import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBaDSr4fx-7vYkflAIsHccy7M0qAIjdb4",
  authDomain: "furniro-products.firebaseapp.com",
  projectId: "furniro-products",
  storageBucket: "furniro-products.appspot.com",
  messagingSenderId: "702965805971",
  appId: "1:702965805971:web:4b5e60a984aa7ede17ee66"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export { auth, googleProvider, facebookProvider }