import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXFUov1_wRRiMz4VqBjEnAlc0WveMWeQ0",
    authDomain: "linkdin-clone-9a83d.firebaseapp.com",
    projectId: "linkdin-clone-9a83d",
    storageBucket: "linkdin-clone-9a83d.appspot.com",
    messagingSenderId: "53724734523",
    appId: "1:53724734523:web:f4436e2424020c2ece681e",
    measurementId: "G-9PWLVJT6MF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()


export {db, auth };