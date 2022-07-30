// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwn0rOMdrHtksCWuJwAmYkrTeDLcZV5FQ",
  authDomain: "themes-188c9.firebaseapp.com",
  projectId: "themes-188c9",
  storageBucket: "themes-188c9.appspot.com",
  messagingSenderId: "671385182770",
  appId: "1:671385182770:web:5c03a58bba86ddeae5d22b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};
