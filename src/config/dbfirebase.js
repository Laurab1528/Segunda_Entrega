// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

import analytics from '@react-native-firebase/analytics';

analytics();

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxxNcuZZNT1t_bS6B3qVLvWsOIvc4Nuxs",
  authDomain: "produc-e88ab.firebaseapp.com",
  projectId: "produc-e88ab",
  storageBucket: "produc-e88ab.appspot.com",
  messagingSenderId: "866772068215",
  appId: "1:866772068215:web:5342361fa3fcfea1f62372",
  measurementId: "G-09BQ546LDD"

  

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);


export { db };