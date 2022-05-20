import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCjYXizC9CS6xHCpwrlmXyigqGyAEWSf6A",
    authDomain: "e-rider-4d973.firebaseapp.com",
    projectId: "e-rider-4d973",
    storageBucket: "e-rider-4d973.appspot.com",
    messagingSenderId: "387931394084",
    appId: "1:387931394084:web:ea59039d9d1a85a33448b1"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
