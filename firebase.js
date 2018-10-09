import firebase from "firebase/app";
import "firebase/firestore"

try {
  firebase.initializeApp({
    apiKey: "AIzaSyAD13O606--0GR8RZNvWupgkmqiz3pQfzY",
    authDomain: "api-project-721884138262.firebaseapp.com",
    databaseURL: "https://api-project-721884138262.firebaseio.com",
    projectId: "api-project-721884138262",
    storageBucket: "api-project-721884138262.appspot.com",
    messagingSenderId: "721884138262"
  });
} catch (err) {
  console.log(err.message);
}

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });