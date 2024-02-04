import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../assets/firebase/firebase.config';


const provider = new GoogleAuthProvider();
const auth = getAuth();

const LoginDemo = () => {

    const handleLogin = (e) => {
        signInWithPopup(auth, provider)
            .then((result) => {
           

                alert('Login successfully..')
            }).catch((error) => {
                console.log(error)
             
            });

    }

    return (
        <div className='m-5 p-5'>
            <button className='bg-primary px-4 text-white' onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginDemo;
