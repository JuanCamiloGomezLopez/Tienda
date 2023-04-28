import {  legacy_createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./root-reducer";

// ****************** creamos nuestra configuracion persistente que se gurdara en memoria ***********************
const persistCofig = {
    key: "root",
    storage,
    blacklist: [`user`]
}
// creamos nuestro persistreducer que utiliza dos argumentos, uno la configuración previamente hecha y el root reducer
const persistReducermy = persistReducer(persistCofig, rootReducer)

// aqui le decimos que nuestra tienda tome todos sus datos desde el persistReducer o memoria cache
export const store = legacy_createStore(persistReducermy);

//Este es la variable que da acceso a la informaci´pon en cahche y la cual debe ser un provider en la raiz de la aplicación.
export const persistor = persistStore(store)