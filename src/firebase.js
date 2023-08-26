// Firebase Configuration

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5c9DYdL52u-_1n5F8SwdCsHElUJDfP4",
  authDomain: "todoapp-f93c7.firebaseapp.com",
  projectId: "todoapp-f93c7",
  storageBucket: "todoapp-f93c7.appspot.com",
  messagingSenderId: "247503151931",
  appId: "1:247503151931:web:498cd9610dadab33af4d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
