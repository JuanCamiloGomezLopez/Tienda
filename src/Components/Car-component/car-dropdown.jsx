import styled from "styled-components";
import { Button } from "../IU-elements/Buttons";

export function CarDropdown() {
  return (
    <Container>
      <div className="cart-items"></div>

      <Button>TO CHECKOUT</Button>
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
