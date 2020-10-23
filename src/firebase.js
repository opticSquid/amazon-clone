import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAvV7aRoC80peU1zWzh_0f1nrjiWJlaq9U",
    authDomain: "clone-20dfb.firebaseapp.com",
    databaseURL: "https://clone-20dfb.firebaseio.com",
    projectId: "clone-20dfb",
    storageBucket: "clone-20dfb.appspot.com",
    messagingSenderId: "862116492890",
    appId: "1:862116492890:web:ffe88cbcc73b32adea4a63"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };