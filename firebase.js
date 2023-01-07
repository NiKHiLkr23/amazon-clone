import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4XNcEeTG-4aq6n1OJssX0g7ikigshFXA",
  authDomain: "clone-e41e8.firebaseapp.com",
  projectId: "clone-e41e8",
  storageBucket: "clone-e41e8.appspot.com",
  messagingSenderId: "908990381367",
  appId: "1:908990381367:web:f330bc979ae679ef676eb2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
