// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBkaAVd7on62DzYvPdb28srkRIy2WESNdE",
    authDomain: "linkedin-clone-4323d.firebaseapp.com",
    projectId: "linkedin-clone-4323d",
    storageBucket: "linkedin-clone-4323d.appspot.com",
    messagingSenderId: "277954136269",
    appId: "1:277954136269:web:e04758fdb083bc1f348184",
    measurementId: "G-CCXG68J9RV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db, auth};