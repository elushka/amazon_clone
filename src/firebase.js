import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "el--clone.firebaseapp.com",
    databaseURL: "https://el--clone.firebaseio.com",
    projectId: "el--clone",
    storageBucket: "el--clone.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})

const auth = firebaseApp.auth();

export { auth };
