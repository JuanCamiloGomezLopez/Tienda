import styled from "styled-components";
import { ProductCard } from "./product-card.component";
import { Link } from "react-router-dom";

export function CategoryPreview({ title, products }) {
  return (
    <Container>
      <h2 className="title">
        <Link to={title}>
          <span >{title.toUpperCase()}</span>
        </Link>
        
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 20px;
    margin-bottom: 15px;   

    span{
      cursor: pointer;  
    }
  }

  .preview {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
