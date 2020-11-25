import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAFqqxZ-A7uZh_52FcQqfBs-3VcmoDY63o",
    authDomain: "ennietech.firebaseapp.com",
    databaseURL: "https://ennietech.firebaseio.com",
    projectId: "ennietech",
    storageBucket: "ennietech.appspot.com",
    messagingSenderId: "361655846152",
    appId: "1:361655846152:web:480acb9eaf18943a7cd8bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();