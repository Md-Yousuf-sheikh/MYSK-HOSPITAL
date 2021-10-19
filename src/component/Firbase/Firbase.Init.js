import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.Config";

const InitializeFirebase = () => {
    return initializeApp(firebaseConfig)
}
export default InitializeFirebase;