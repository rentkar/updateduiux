import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXXZWJqRrcxRS7sHFcFY4BsUmf1v0oCPw",
  authDomain: "rentkar-web-app.firebaseapp.com",
  projectId: "rentkar-web-app",
  storageBucket: "rentkar-web-app.appspot.com",
  messagingSenderId: "881815856030",
  appId: "1:881815856030:web:feadf09ecb198bc1512c8f"
};

firebase.initializeApp( firebaseConfig )

export default  firebase