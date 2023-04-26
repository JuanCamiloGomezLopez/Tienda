import { createContext, useState, useEffect } from "react";



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
}

export const CarContext = createContext({
  caropen: false,
  setCaropen: () => {},
  caritems: [],
  addCartItem: () => {},
  removetemToCart: () => {},
  carcount: 0,
  clearItemfromCar: ()=>{},
  carTotal: 0,

});

export const CarProvider = ({ children }) => {
  const [caropen, setCaropen] = useState(false);
  const [caritems, setCaritems] = useState([]);
  const [carcount, setCarcount] = useState(0);
  const [carTotal, setCarTotal] = useState(0);

  
useEffect(()=>{
  const newCartOunt = caritems.reduce((total, caritem)=> total + caritem.quantity, 0);
  setCarcount(newCartOunt);
},[caritems])

useEffect(()=>{
  const newCartTotal = caritems.reduce((total, caritem)=> total + caritem.quantity * caritem.price, 0);
  setCarTotal(newCartTotal);
},[caritems])

  /* la funcion addItemToCart es la encargada de agregarle al contexto caritems un nuevo producto siempre y cuando
  el producto no exista, si el producto existe se agrega uno a la cantidad
  esta funcion es la que se llamara mediante el contexto*/
  const addItemToCart = (productToadd) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    setCaritems(addCartItem(caritems, productToadd));
  };

  const removetemToCart = (carItemtoRemove) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    setCaritems(removeCartItem(caritems, carItemtoRemove));
  };


  const clearItemfromCar = (carItemtoClear) => {
    /* aqui actualizamos el contexto con una funcion addCartItem la cual se encargara de la verificaciíon*/
    setCaritems(clearItem(caritems, carItemtoClear));
  };

  const value = {
    caropen,
    setCaropen,
    addItemToCart,
    caritems,
    carcount,
    setCarcount,
    removetemToCart,
    clearItemfromCar,
    carTotal
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
