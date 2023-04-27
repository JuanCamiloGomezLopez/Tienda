import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoW3z7fUDOJeEKbDyzNlG5svGQF0ijwIw",
  authDomain: "ecommerce-de04f.firebaseapp.com",
  projectId: "ecommerce-de04f",
  storageBucket: "ecommerce-de04f.appspot.com",
  messagingSenderId: "773461025901",
  appId: "1:773461025901:web:8d5ef15dcff8cba60dcb64",
};

const firebaseApp = initializeApp(firebaseConfig);

/*crear usuarios con Google*/

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const sigInwithGooglePopup = () => signInWithPopup(auth, provider);

/* base de datos*/

export const db = getFirestore();

//#region 
/* Creamos una nueva coleccion dentro de firebase sirve para ingresar todo un stock completo a la base de datos*/
export const addCollectionandDocuments = async (collectionkey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })
    await batch.commit();
   }

/* el siguiente efecto se deberá agregar en el componente de contexto de sus productos o en su defecto en la variable
que almacena los productos. en nuestro caso SHOP_DATA es el array de productos que queremos subir a firebase

  useEffect(()=>{
    addCollectionandDocuments("categories", SHOP_DATA )
  },[])

*/
//#endregion

//#region 
/*ahora que ya subimos todos los productos a firebase mediante la coleccion categories vamos a recperar todos esos datos en nuestro productcontext*/

export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title, items}= docSnapshot.data();
        acc[title.toLowerCase()]= items;
        return acc;
    }, {});

    return categoryMap;
}

//#endregion




/* Creamos un documento dentro de la coleccion users users*/
export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation = {}
) => {
  const userDocref = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocref;
};

/*crear usuarios con usuario y contraseña*/

export const createUserWithEmailAndPassword1 = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

/*Logear usuarios registrados para ingresar a la app*/

export const signInWithEmailAndPassword1 = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

/*cerrar la sección de un usuario*/

export const sigOutUser = async () => await signOut(auth);

/*programar un oyente de firebae que nos dice si el usuario se authentico o cerro sesión sin necesidad de repetir tanto codigo*/

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
