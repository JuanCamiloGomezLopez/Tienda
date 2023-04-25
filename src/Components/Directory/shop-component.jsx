import styled from "styled-components";
import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import { ProductCard } from "../product-card.component";

export function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <Shop_Container>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Shop_Container>
  );
};

const Shop_Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
`


