import styled from "styled-components";
import { Button } from "../IU-elements/Buttons";
import { CarItem } from "./car-item";
import { useContext } from "react";
import { CarContext } from "../../context/car.context";
import { Link } from "react-router-dom";

export function CarDropdown() {
    const { caritems, setCaropen } = useContext(CarContext)
  
    const handler = ()=>{    
        setCaropen(false)
    }

  return (
    <Container>
      <div className="cart-items">
        {caritems.map(item => <CarItem key={item.id} cartitem={item}/>)}
      </div>
    
        <Link to="/checkout">
        <Button onClick={handler}>TO CHECKOUT</Button>
        </Link>
      
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 0px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  button {
    margin-top: auto;
  }
`;
