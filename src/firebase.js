import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa2YmMLQs2qOj6mtmvo90DoSof13hjWE0",
  authDomain: "whatsapp-clone-1-39653.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1-39653.firebaseio.com",
  projectId: "whatsapp-clone-1-39653",
  storageBucket: "whatsapp-clone-1-39653.appspot.com",
  messagingSenderId: "625998950361",
  appId: "1:625998950361:web:2c6be872843ea7ac1a33c8",
  measurementId: "G-WMNF4VSL2N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
