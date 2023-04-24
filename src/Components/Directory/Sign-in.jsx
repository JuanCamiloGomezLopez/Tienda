import styled from "styled-components";
import { SignUp } from "../SignUp";
import { Login } from "../log"

export function Sign_in() {  
  return (
    <Container>
      <div className="loginuser">
       <Login />
      </div>
      <div className="createuser">
        <SignUp />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 75%;  
  margin: auto;
  display: flex;  
  justify-content: space-around;
  margin-top: 60px;
`;
