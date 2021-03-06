import { useEffect, useState } from 'react';
import { updateProfile, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import InitializeFirebase from '../Firbase/Firbase.Init';

InitializeFirebase()

const useFirbase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    console.log(user);
    // google pass
    const sinInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };
    // password gmail
    const createUserWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed In
                const user = result.user;
                setUser(user);
                updateName(name);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // email password account 
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }
    // Set User Name` 
    const updateName = name => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    // Sin Out
    const logOut = () => {
        const auth = getAuth();
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);

        }).finally(() => setIsLoading(false))
    }

    // oneAuth state chang
    // Observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // set user
                setUser(user);

            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe;
    }, [])


    return {
        user, createUserWithEmail, signInWithEmailPassword, setUser, setError, error, setIsLoading, logOut, sinInUsingGoogle, isLoading
    }

};

export default useFirbase;