import styled from "styled-components";
import { useContext } from "react";
import { CarContext } from "../context/car.context";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export function CardItemCheckout() {
  const { caritems, addItemToCart, removetemToCart, clearItemfromCar } = useContext(CarContext);
  const { name } = caritems;

  return (
    <Container>
      {caritems.map((item) => {
        return (
          <div className="container-card" key={item.id}>
            <div className="image-container">
              <img src={item.imageUrl} alt={`${name}`} />
            </div>

            <span className="name">{item.name}</span>
            <div className="quantity">
              <AiOutlineLeft
                onClick={() => removetemToCart(item)}
                className="flecha"
              />
              <span>{item.quantity}</span>
              <AiOutlineRight
                onClick={() => addItemToCart(item)}
                className="flecha"
              />
            </div>

            <span className="precio">{item.price}</span>
            <div onClick={()=>clearItemfromCar(item)} className="remove-button">&#10005;</div>
          </div>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  .container-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 100px;
    align-items: center;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;

    .image-container {
      width: 23%;
      padding-right: 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .quantity {
      width: 23%;
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        padding: 0 5px;
      }

      .flecha {
        cursor: pointer;
      }
    }

    .name {
      width: 23%;   
    }

    .precio {
      width: 23%;
      text-align: center;
    }

    .remove-button {
      width: 13%;
      text-align: right;

      cursor: pointer;
    }
  }
`;
