import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseAppconfig = {
    apiKey: "AIzaSyBSuWR4O4Lvar98V8wtVhChiFwuj57lLzo",
    authDomain: "testdb-50d7f.firebaseapp.com",
    projectId: "testdb-50d7f",
    storageBucket: "testdb-50d7f.appspot.com",
    messagingSenderId: "687131286451",
    appId: "1:687131286451:web:1a333fd6bfa02b289fc9c6"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseAppconfig) : getApps()[0];

export default firebase_app;

export const app =initializeApp(firebaseAppconfig)
export const storage =getStorage(app)

