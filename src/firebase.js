// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDnnmGEwJreGBuJMyOs_sQsGt7HmDlDbYM",

  authDomain: "customer-portal-aed17.firebaseapp.com",

  projectId: "customer-portal-aed17",

  storageBucket: "customer-portal-aed17.firebasestorage.app",

  messagingSenderId: "265010294486",

  appId: "1:265010294486:web:80c374087d8a376765e377"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
