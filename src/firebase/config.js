import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBK0xdRMrkMP_GBFgBhE7QId0xDm9VXdbU",
    authDomain: "chat-app-fc45d.firebaseapp.com",
    projectId: "chat-app-fc45d",
    storageBucket: "chat-app-fc45d.appspot.com",
    messagingSenderId: "403260613266",
    appId: "1:403260613266:web:3e6e4dcd0569c354b5bc4b",
    measurementId: "G-6XCETEGRS1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;