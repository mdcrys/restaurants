import firebase from 'firebase/app'
import 'firebase/firestore'
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJXZgmdq65guJJVVpWLrQBkSysaNVm41w",
    authDomain: "restaurants-ebebf.firebaseapp.com",
    projectId: "restaurants-ebebf",
    storageBucket: "restaurants-ebebf.appspot.com",
    messagingSenderId: "501644140973",
    appId: "1:501644140973:web:3fb949e04e24fd9270c124"
  }
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);