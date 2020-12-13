// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from  "firebase" ;


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBubpElDH39nZZR-15AAatgwfAajtMMmRY",
  authDomain: "citydeals-32c25.firebaseapp.com",
  projectId: "citydeals-32c25",
  storageBucket: "citydeals-32c25.appspot.com",
  messagingSenderId: "252910601840",
  appId: "1:252910601840:web:9f95359db13749618b96b5",
  measurementId: "G-QZ1BZZ2R3G"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore() ;
  const auth = firebase.auth();
  export {db , auth };