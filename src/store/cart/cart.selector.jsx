import { createSelector } from "reselect";

// selectCartReducer trae el cart de la tienda, trae todo el reducer del cart
export const selectCartReducer = state => state.cart;

// ****************** guarda en memoria ************************

// selecciona de la tienda el caritems y lo guarda en memoria
export const selectcartItems = createSelector(
    [selectCartReducer],
    (cart)=> cart.caritems
)
// selecciona de la tienda el caropen (true o false) y lo guarda en memoria
export const selectIsCarOpen = createSelector(
    [selectCartReducer],
    (cart)=>cart.caropen
)


// ****************** ejecuta siempre y cuando haya cambiado lo que esta en memoria ************************


// suma el total de los productos pero siempre y cuando los productos hayan cambiado, si no cambian no hace la operación
export const selectCarCount = createSelector(
    [selectcartItems],
    (caritems) => caritems.reduce(
        (total, caritem) => total + caritem.quantity,
        0
      )
)
// suma el total de los productos pero siempre y cuando los productos hayan cambiado, si no cambian no hace la operación
export const selectCarTotal = createSelector(
    [selectcartItems],
    (caritems)=>caritems.reduce(
        (total, caritem) => total + caritem.quantity * caritem.price,
        0
      )
)

