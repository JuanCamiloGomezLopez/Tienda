import { createAction } from "../../utils/reducer/reducer.utils";

const INITIAL_STATE = {categories: [],};

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "SET_CATEGORIES",
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
