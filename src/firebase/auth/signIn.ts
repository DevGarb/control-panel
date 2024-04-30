import firebaseAppConfig from "../firebaseAppconfig";
import { signInWithEmailAndPassword, getAuth, User } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        const { user: signedInUser } = await signInWithEmailAndPassword(auth, email, password);
        result = signedInUser;
    } catch (e) {
        error = e;
    }

    return { result, error };
}