import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

import { getStorage } from 'firebase/storage';


const firebaseConfig = {

    apiKey: "AIzaSyDoSdW5_9tNhDqZYaBZsCShhWfR5mExByw",
  
    authDomain: "portfolio-website-35ab6.firebaseapp.com",
  
    projectId: "portfolio-website-35ab6",
  
    storageBucket: "portfolio-website-35ab6.appspot.com",
  
    messagingSenderId: "58314292738",
  
    appId: "1:58314292738:web:74a9cacaeb3dcd56baf11b",
  
    measurementId: "G-VCQSCH26C0"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
// Get a reference to the Firestore database
export const db = getFirestore(app)

export const storage = getStorage(app); 

export default db;
