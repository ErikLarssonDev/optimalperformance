import firebase from 'firebase/app';
  import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDzHxE9fjjnIUeDuyF61tAgez3vikAdr1k",
    authDomain: "react-blog-49c84.firebaseapp.com",
    projectId: "react-blog-49c84",
    storageBucket: "react-blog-49c84.appspot.com",
    messagingSenderId: "76033656380",
    appId: "1:76033656380:web:2ce3ecf635781a3929a539",
    measurementId: "G-QMBSRF4C0F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  
  export const firestore = firebase.firestore();
//window.firestore = firestore;
