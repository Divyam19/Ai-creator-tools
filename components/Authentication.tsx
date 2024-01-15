// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiwqP4g5C7rOdEAYqhfPMSNe7P9nPcXC8",
  authDomain: "divinator-5af06.firebaseapp.com",
  projectId: "divinator-5af06",
  storageBucket: "divinator-5af06.appspot.com",
  messagingSenderId: "261995237775",
  appId: "1:261995237775:web:ff219ddcd66b0885137bfa",
  measurementId: "G-T2M87ZFH6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export default {auth,provider};
