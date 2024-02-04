import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../assets/firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    //create user using  email and password
    const createUser = (email, password) => {
        setLoading(true)
       
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //create user using  Google Account

    const signUpWithGoogle = () => { 
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    //login 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    //user is available or not 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true)
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    }, [])


    //passing values
    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGoogle,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;


import { createUserWithEmailAndPassword } from "firebase/auth";


