import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config'

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)


}

