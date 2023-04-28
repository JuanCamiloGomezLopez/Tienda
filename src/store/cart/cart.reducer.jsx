import { createAction } from "../../utils/reducer/reducer.utils";

export const CAR_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  caritems: [],
  caropen: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CAR_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        caritems: payload,
      };
    case CAR_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        caropen: payload,
      };

    default:
      return state;
  }
};

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




export const setCaropen = (bool) =>
  createAction(CAR_ACTION_TYPES.SET_IS_CART_OPEN, bool);

/* la funcion addItemToCart es la encargada de agregarle al contexto caritems un nuevo producto siempre y cuando
  el producto no exista, si el producto existe se agrega uno a la cantidad
  esta funcion es la que se llamara mediante el contexto*/
export const addItemToCart = (caritems, productToadd) => {
  /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
  const newCartItems = addCartItem(caritems, productToadd);
  return createAction(CAR_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};

export const removetemToCart = (caritems, carItemtoRemove) => {
  /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
  const newCartItems = removeCartItem(caritems, carItemtoRemove);
  return createAction(CAR_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};

export const clearItemfromCar = (caritems, carItemtoClear) => {
  /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
  const newCartItems = clearItem(caritems, carItemtoClear);
  return createAction(CAR_ACTION_TYPES.SET_CART_ITEM, newCartItems);
};
