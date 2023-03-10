import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Akash'})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    function createUser(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle(){
        return signInWithPopup(auth, googleProvider);
    }

    function logOut(){
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, loading, createUser, signIn, signInWithGoogle, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;