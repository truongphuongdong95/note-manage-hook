import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA3Ynq-j6CnU5APgJG_toEdSPJhAm3OWh0",
    authDomain: "notereact-e68e1.firebaseapp.com",
    databaseURL: "https://notereact-e68e1-default-rtdb.firebaseio.com",
    projectId: "notereact-e68e1",
    storageBucket: "notereact-e68e1.appspot.com",
    messagingSenderId: "457412357182",
    appId: "1:457412357182:web:560568028dd1223d1bf56f",
    measurementId: "G-MMPCXS510P"
  };
  // Initialize Firebase
 
firebase.initializeApp(firebaseConfig);

export const noteData = firebase.database().ref('dataForNote');