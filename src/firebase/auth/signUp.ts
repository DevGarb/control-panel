import dbConfig from "../firebaseAppconfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(dbConfig);

export default async function signUp(email: string, password: string, nick: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password, nick);
    } catch (e) {
        error = e;
    }

    return { result, error };
}