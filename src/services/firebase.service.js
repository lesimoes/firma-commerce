import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

console.log(process.env)

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY || 'AIzaSyCbcOgDEQvQo-o4WjG0xpgC6OGt0ek_ogs',
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN || 'qualquercoisa-4f733.firebaseapp.com',
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID || 'qualquercoisa-4f733',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET || 'qualquercoisa-4f733.appspot.com',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID || null,
    appId: process.env.REACT_APP_FIREBASE_APPID || '1076581422952'
  }


  initializeApp(config);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => signInWithPopup(auth, provider);

  