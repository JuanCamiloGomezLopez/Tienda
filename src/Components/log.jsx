import styled from "styled-components";
import {
  sigInwithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { FormInput } from "./Form-input";
import { useState } from "react";

export function Login() {
 
  const defaultformfields = {    
    email: "",
    password: "",
    }

  const [formFields, setFormFields] = useState(defaultformfields);

  const { email, password } = formFields;

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await sigInwithGooglePopup();
    console.log(user);
    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <Login_container>
     <div className="loginuser">
        <h2>I ready hace an acount</h2>
        <p>Sign in with your email and password</p>

        <FormInput
          type="email"
          label="Email"
          required
          onChange={onchangeinput}
          name="email"
          value={email}
        />
        <FormInput
          type="password"
          label="Password"
          required
          onChange={onchangeinput}
          name="password"
          value={password}
        />
        <button onClick={logGoogleUser}>Sign in whit google popup</button>
      </div>
     
    </Login_container>
  );
};

const Login_container = styled.div`
  
  width: 400px;

    
  p {
    font-size: 12px;
  }

`