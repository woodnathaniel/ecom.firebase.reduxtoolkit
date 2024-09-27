// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional.

const firebaseConfig = {
  apiKey: "AIzaSyCmmVVeruBdALhGVJW6LhMJ03ySutxETPw",
  authDomain: "twatis-e6c1c.firebaseapp.com",
  projectId: "twatis-e6c1c",
  storageBucket: "twatis-e6c1c.appspot.com",
  messagingSenderId: "196833146335",
  appId: "1:196833146335:web:f92b0197fd4486bf41406a",
  measurementId: "G-WW1LYPFET6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

