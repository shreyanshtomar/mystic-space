import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAr9wPSeopoiGeyOn84spy_kV-ivqkVN_g",
    authDomain: "mystic-space.firebaseapp.com",
    projectId: "mystic-space",
    storageBucket: "mystic-space.appspot.com",
    messagingSenderId: "58367590686",
    appId: "1:58367590686:web:ed29ef72542bb47558490f",
    measurementId: "G-7X4Z2RM7CT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
