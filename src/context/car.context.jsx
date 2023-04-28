import { createContext, useState, useEffect, useReducer } from "react";

/*funcion encargada de la verificacion*/
const addCartItem = (caritems, productToadd) => {
  /* primero verificamos si el producto ingresado existe en caritems mediante el metodo fiind el cual
devuelve un booleano*/
  const existingCaritem = caritems.find(
    (caritem) => caritem.id === productToadd.id
  );

  /* aqui verificamos si la funcion existingCaritem retorna un true o un false, se acuerdo a esto se actuali<a el estado de caritem*/
  if (existingCaritem) {
    /* aqui returnamos lo siguiente. si existingCaritem es true, mantenmos todo el caritems y le agregamos una canbtidad*/
    return caritems.map((caritem) =>
      caritem.id === productToadd.id
        ? { ...caritem, quantity: caritem.quantity + 1 }
        : /* aqui returnamos lo siguiente. si existingCaritem es false, mantenemos caritem igual*/
          caritem
    );
  }

  /* adicioonalmente si existingCaritem es falso es porque el producto no existe, en ese caso retornamos todo lo que tenia caritems y 
lse sumamos un nuevo item llamado productToadd y agregamos la cantidad de 1*/
  return [...caritems, { ...productToadd, quantity: 1 }];
};

const removeCartItem = (caritems, carItemtoRemove) => {
  /* primero verificamos si el producto ingresado existe en caritems mediante el metodo fiind el cual
    devuelve un booleano*/
  const existingCaritem = caritems.find(
    (caritem) => caritem.id === carItemtoRemove.id
  );

  if (existingCaritem.quantity === 1) {
    return caritems.filter((caritems) => caritems.id != carItemtoRemove.id);
  }

  /* aqui returnamos lo siguiente. si existingCaritem es true, mantenmos todo el caritems y le agregamos una canbtidad*/
  return caritems.map((caritem) =>
    caritem.id === carItemtoRemove.id
      ? { ...caritem, quantity: caritem.quantity - 1 }
      : /* aqui returnamos lo siguiente. si existingCaritem es false, mantenemos caritem igual*/
        caritem
  );
};

const clearItem = (caritems, carItemtoClear) => {
  return caritems.filter((caritems) => caritems.id != carItemtoClear.id);
};

export const CarContext = createContext({
  caropen: false,
  setCaropen: () => {},
  caritems: [],
  addCartItem: () => {},
  removetemToCart: () => {},
  carcount: 0,
  clearItemfromCar: () => {},
  carTotal: 0,
});

export const USER_ACTION_TYPES = {
  "SET_CART_ITEM": "SET_CART_ITEM",
  "SET_IS_CART_OPEN": "SET_IS_CART_OPEN",
}

const INITIAL_STATE = {
  caritems: [],
  caropen: false,
  carcount: 0,
  carTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
      case USER_ACTION_TYPES.SET_IS_CART_OPEN:
        return {
          ...state,
          caropen: payload,
        }

    default:
      throw new Error(`error desconocido type ${type} in userReducer`);
  }
};

export const CarProvider = ({ children }) => {
  const [{ caropen, caritems, carcount, carTotal }, dispatch] = useReducer( cartReducer, INITIAL_STATE );

// en esta fu8ncion reunimos todas las funciones que tenemos y hacemos el dispatch de las 5 funciones
  const updateCartItemsReducer = (newCartItems) => {
    const newCartOunt = newCartItems.reduce(
      (total, caritem) => total + caritem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, caritem) => total + caritem.quantity * caritem.price,
      0
    );

    dispatch({
      type: USER_ACTION_TYPES.SET_CART_ITEM,
      payload: {
        caritems: newCartItems,
        carTotal: newCartTotal,
        carcount: newCartOunt,
      },
    });
  };

  /* la funcion addItemToCart es la encargada de agregarle al contexto caritems un nuevo producto siempre y cuando
  el producto no exista, si el producto existe se agrega uno a la cantidad
  esta funcion es la que se llamara mediante el contexto*/
  const addItemToCart = (productToadd) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    const newCartItems = addCartItem(caritems, productToadd);
    updateCartItemsReducer(newCartItems);
  };

  const removetemToCart = (carItemtoRemove) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    const newCartItems = removeCartItem(caritems, carItemtoRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemfromCar = (carItemtoClear) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    const newCartItems = clearItem(caritems, carItemtoClear);
    updateCartItemsReducer(newCartItems);
  };

  const setCaropen = (bool)=>{
    dispatch({type: USER_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
  }

  const value = {
    caropen,
    setCaropen,
    addItemToCart,
    caritems,
    carcount,    
    removetemToCart,
    clearItemfromCar,
    carTotal,
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
