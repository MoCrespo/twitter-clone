// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyATq7je7jfhk8SKk2eQP-jVu7pf6o6M7m4",
  authDomain: "twitter-clone-bycr.firebaseapp.com",
  projectId: "twitter-clone-bycr",
  storageBucket: "twitter-clone-bycr.appspot.com",
  messagingSenderId: "1059561761173",
  appId: "1:1059561761173:web:d4711f94c354e02a39ae9c",
  measurementId: "G-KQ9PJ4MFB9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db;