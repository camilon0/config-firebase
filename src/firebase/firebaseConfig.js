// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkO9M7jU6Z5EUTvHZ_jzYwUPY5rjASQQM",
  authDomain: "ejemplo-clase-5cd2d.firebaseapp.com",
  projectId: "ejemplo-clase-5cd2d",
  storageBucket: "ejemplo-clase-5cd2d.appspot.com",
  messagingSenderId: "644973266309",
  appId: "1:644973266309:web:b3873e80a98c3a73e6b0ec",
  measurementId: "G-WY75L7G76Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);
