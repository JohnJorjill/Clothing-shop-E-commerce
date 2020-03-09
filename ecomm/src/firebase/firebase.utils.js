import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6Qb2IaAEN0T137LcDWjIOhMUepSp53Oc",
    authDomain: "crwn-db-bddf9.firebaseapp.com",
    databaseURL: "https://crwn-db-bddf9.firebaseio.com",
    projectId: "crwn-db-bddf9",
    storageBucket: "crwn-db-bddf9.appspot.com",
    messagingSenderId: "798362010864",
    appId: "1:798362010864:web:188cbd420695f40fe0ee35",
    measurementId: "G-CPVXXY411N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;