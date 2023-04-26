import styled from "styled-components";

export function CarItem({ cartitem }) {
  const { name, quantity, imageUrl, price } = cartitem;

  const pricetotal = quantity * price;

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />
      <div className="content">
        <h4>{name}</h4>
        <div className="text">
          <span>Cant {quantity} x ${pricetotal}</span>
          
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img{
    width: 50px;
    height: 60px;
  }
  .content{
    margin-left: 15px;

    .text{
        display: flex;
    }
  }

  
`;
