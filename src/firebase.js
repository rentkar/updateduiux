import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDRdPVVrprjeH1kB7WGyCUCnOWU4QVgId0",
  authDomain: "rentkar-ky.firebaseapp.com",
  projectId: "rentkar-ky",
  storageBucket: "rentkar-ky.appspot.com",
  messagingSenderId: "99290516733",
  appId: "1:99290516733:web:6cd3a4feaea71e83c8c294",
  measurementId: "G-SP1BL4NQ0H"
};

firebase.initializeApp( config )

export default  firebase