import { createSelector } from "reselect";

//aqui en selectCategoryReducer guardamos lo que haya en la store de redux correspondiente al reducer de categories
const selectCategoryReducer = (state) => state.categories;

//aqui guardamos la información en el nuevo selector de selectCategoryReducer, (esta información queda en memoria cache hasta que cambie selectCategoryReducer)
export const selecCategories = createSelector(
  [selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);  

//aqui ponemos la salida, loq ue queramos que haga solo una vez mientras que categorie no haya cambiado, cuando categories cambie se vuelve a ejecutar
//ese selector recibe un array y lo combierte a un objeto
export const selectCategoriesMap = createSelector( [selecCategories], (categories) => categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})  
);