import styled from "styled-components";
import { SignUp } from "../authentication-components/SignUp";
import { Login } from "../authentication-components/log"

export function Authentication() {  
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
  width: 1200px;  
  margin: auto;
  display: flex;  
  justify-content: space-around;
  margin-top: 60px;
`;
