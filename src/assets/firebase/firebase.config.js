

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;

//.env.local (put it inside .env.local)

// VITE_BIDYUT="123"

// VITE_API_KEY="AIzaSyCb-qljYrCVbuju79hDV8S_sYbxm4KnAi0"

// VITE_AUTH_DOMAIN="react-auth-87817.firebaseapp.com"

// VITE_PROJECT_ID="react-auth-87817"

// VITE_STORAGE_BUCKET="react-auth-87817.appspot.com"

// VITE_MESSAGING_SENDER_ID="1024602932962"

// VITE_APP_ID="1:1024602932962:web:eca87d6d780e4bdde180bb"






















