import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
 } from "firebase/auth";

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

/*crear usuarios con Google*/

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const sigInwithGooglePopup = ()=> signInWithPopup(auth, provider);

/* base de datos*/

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
userAuth,
aditionalInformation={}
) => {
const userDocref = doc(db, "users", userAuth.uid);

const userSnapshot = await getDoc(userDocref);

if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocref, {
            displayName,
            email,
            createdAt,
            ...aditionalInformation
        });
        
    } catch (error) {
        console.log("error creating the user", error.message)
    }
} 

return userDocref

}

/*crear usuarios con usuario y contraseña*/

export const createUserWithEmailAndPassword1 =  async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
}

