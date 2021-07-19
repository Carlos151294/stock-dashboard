import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDDRKIT3xCQZuLLmDPsbIN5y7rZe_USJBc',
  authDomain: 'stock-dashboard-317af.firebaseapp.com',
  projectId: 'stock-dashboard-317af',
  storageBucket: 'stock-dashboard-317af.appspot.com',
  messagingSenderId: '923565209162',
  appId: '1:923565209162:web:4ffd6f9f9bbf929d9ad8b3',
  measurementId: 'G-JPXJZGEQXE',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const loginWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
