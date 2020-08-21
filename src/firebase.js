  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVK7CHrIPnW7N_HgFbWYr_S2bJcV0EZmQ",
    authDomain: "grainery-app.firebaseapp.com",
    databaseURL: "https://grainery-app.firebaseio.com",
    projectId: "grainery-app",
    storageBucket: "grainery-app.appspot.com",
    messagingSenderId: "6680418450",
    appId: "1:6680418450:web:43cb2197925d8b301a2e4b",
    measurementId: "G-M544J02ZY0"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };