

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//----------------------- AUTH -------------------------------------
export const auth = getAuth(app)

// SIGN UP
export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
}
// LOGIN
export const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}
// LOGOUT
export const logOut = async () => {
    await signOut(auth)
}

//----------------------- STORAGE -------------------------------------

export const storage = getStorage()
const rootFolder = ref(storage)


const imagesFolder = ref(storage, 'images')
const randomRef = ref(storage, 'images/random.jpg')

export const uploadFiles = (file) => {
    uploadBytes(randomRef, file).then((snapshot) => {
        console.log('uploaded a blob')
    })
}

