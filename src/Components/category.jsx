import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCard } from "./product-card.component";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../store/categories/category.selector";

export function Category() {
  const { category } = useParams(); 

  const categoriesMap = useSelector(selectCategoriesMap)

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Category_container>
      <h2>{category.toUpperCase()}</h2>
      <Category_subcontainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Category_subcontainer>
    </Category_container>
  );
}
const Category_container = styled.div`
 
 h2{
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
 }
`;

const Category_subcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`;
