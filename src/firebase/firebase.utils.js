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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; //Since the userAuth is null when a user signs out and if the user signs out we return.

    //if it exists we query to firestore if to check if it exists and if it doesn't we are gonna create a user.
    //Note: Firestore return two diff type of objs: References and Snapshots(in either document or collections version)

    const userRef = firestore.doc(`users/${userAuth.uid}`); //THIS IS A documentRef obj on which CRUD operations can be performed.
    const snapshot = await userRef.get(); //It basically represents the data!

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
