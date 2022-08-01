import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzWhxfgMQddyIsnsh2gHBpeqgDwe_Z16k",
  authDomain: "tik-tok-clone-e85e2.firebaseapp.com",
  projectId: "tik-tok-clone-e85e2",
  storageBucket: "tik-tok-clone-e85e2.appspot.com",
  messagingSenderId: "254392808821",
  appId: "1:254392808821:web:2c2b29fb01565075de4f3c",
  measurementId: "G-BNZPQ048Z3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
