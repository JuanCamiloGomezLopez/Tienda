import { Route, Routes } from "react-router-dom";
import { Category_component } from "../catergory-component";
import { Category } from "../category";

import { setCategories } from "../../store/categories/categorie.reducer";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getcategoriesmap = async () => {
      const categoryarray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryarray));
    };
    getcategoriesmap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Category_component />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
