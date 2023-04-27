import { useContext, Fragment} from "react";
import { CategoriesContext } from "../context/categories.context";
import { CategoryPreview } from "./categorie-preview";

export function Category_component() {
  const { cateroriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(cateroriesMap).map((title) => {    
        const products = cateroriesMap[title];        
        return <CategoryPreview key={title} products={products} title={title}/>
      })}
    </Fragment>
  );
}

