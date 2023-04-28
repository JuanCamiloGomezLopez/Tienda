import { useContext, Fragment } from "react";

import { CategoryPreview } from "./categorie-preview";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/category.selector";

export function Category_component() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
}
