// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


  apiKey= "AIzaSyCRNTbP6QNbef0XkJkIhtPYVNoL5Q6lUx4";

  authDomain= "portfolio-83db1.firebaseapp.com";

  projectId= "portfolio-83db1",

  storageBucket= "portfolio-83db1.appspot.com",

  messagingSenderId= "533821717340",

  appId= "1:533821717340:web:6038500cc363cdc786df99",

  measurementId= "G-TXG95QY1ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);