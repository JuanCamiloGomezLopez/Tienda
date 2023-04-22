import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from "firebase/auth";
    import {
        getFirestore,
        doc,
        getDoc,
        setDoc
    } from "firebase/firestore"

    const firebaseConfig = {
        apiKey: "AIzaSyAoW3z7fUDOJeEKbDyzNlG5svGQF0ijwIw",
        authDomain: "ecommerce-de04f.firebaseapp.com",
        projectId: "ecommerce-de04f",
        storageBucket: "ecommerce-de04f.appspot.com",
        messagingSenderId: "773461025901",
        appId: "1:773461025901:web:8d5ef15dcff8cba60dcb64"
      };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const sigInwithGooglePopup = ()=> signInWithPopup(auth, provider);

/* base de datros*/

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
const userDocref = doc(db, "users", userAuth.uid);

const userSnapshot = await getDoc(userDocref);

if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocref, {
            displayName,
            email,
            createdAt
        });
        
    } catch (error) {
        console.log("error creating the user", error.message)
    }
} 

return userDocref


}

