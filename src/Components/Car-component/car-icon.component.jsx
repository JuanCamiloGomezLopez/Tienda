import shoppingicon from "../../assets/shopping-bag.svg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCarOpen,
  selectCarCount,
} from "../../store/cart/cart.selector";
import { setCaropen } from "../../store/cart/cart.reducer";

export function CartIcon() {
  const dispatch = useDispatch();
  const carcount = useSelector(selectCarCount);
  const caropen = useSelector(selectIsCarOpen);

  const toggleIsCarOpen = () => dispatch(setCaropen(!caropen));

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
