// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxdjOtnQZjOov87fObH1t6pFNSJ-vkD0",
  authDomain: "dansocialmedia-ff815.firebaseapp.com",
  projectId: "dansocialmedia-ff815",
  storageBucket: "dansocialmedia-ff815.appspot.com",
  messagingSenderId: "504770356012",
  appId: "1:504770356012:web:eafd7ebc982a09ea678289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
