// firebase.js
import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBsaM5yDc6Zz7t6t2Ft0AORZGQZcWK7Vt0",
//   authDomain: "kckd-835a1.firebaseapp.com",
//   projectId: "kckd-835a1",
//   storageBucket: "kckd-835a1.appspot.com",
//   messagingSenderId: "954002011441",
//   appId: "1:954002011441:web:7cf6e7a408f184bddfac10"
// }; 


function initializeAppIfNecessary() {
    try {
        return getApp();
    } catch (any) {

        return initializeApp(firebaseConfig);
    }
}

const app = initializeAppIfNecessary();


const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);


export { storage, db, auth }; 