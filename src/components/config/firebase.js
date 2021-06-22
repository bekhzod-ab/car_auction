import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyCPip8zTScc11CsAu5E0iSvsJjFa25qTBU",
    authDomain: "caronsale-af98d.firebaseapp.com",
    projectId: "caronsale-af98d",
    storageBucket: "caronsale-af98d.appspot.com",
    messagingSenderId: "1039027690896",
    appId: "1:1039027690896:web:e42eec06dc47eb64962715"
  })

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage()
export const authApp = app.auth()  