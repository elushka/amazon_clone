import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyYsAPF8XJs4bBxSpdy9a5eL2rKXvUXpk",
    authDomain: "el--clone.firebaseapp.com",
    databaseURL: "https://el--clone.firebaseio.com",
    projectId: "el--clone",
    storageBucket: "el--clone.appspot.com",
    messagingSenderId: "762771091576",
    appId: "1:762771091576:web:9b27532a3e6e09ccc7bd8d",
    measurementId: "G-NE7RE5CF93"
})

const auth = firebaseApp.auth();

export { auth };
