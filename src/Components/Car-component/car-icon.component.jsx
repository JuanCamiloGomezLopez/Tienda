import shoppingicon from "../../assets/shopping-bag.svg";
import styled from "styled-components";
import { CarContext } from "../../context/car.context";
import { useContext } from "react";


export function CartIcon() {

  const {caropen, setCaropen} = useContext(CarContext);
  const {carcount} = useContext(CarContext);

  const toggleIsCarOpen = ()=>{
    setCaropen(!caropen);
  }
  return (
    <CarIconContainer onClick={toggleIsCarOpen}>
      <img src={shoppingicon} alt="hola" />
      <span>{carcount}</span>
    </CarIconContainer>
  );
}

const CarIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 30px;
    height: 30px;
  }

  span {
    position: absolute;    
    font-size: 12px;
    font-weight: bold;
    bottom: 14px;
  }
`;
