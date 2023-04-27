import styled from "styled-components";
import {
  sigInwithGooglePopup, 
  signInWithEmailAndPassword1,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../IU-elements/Form-input";
import { useState } from "react";
import { Button } from "../IU-elements/Buttons";
/* import { Usercontext } from "../context/user.context"; esta importacion la hariamos si utilizaramos el use context*/


export function Login() {
  const defaultformfields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultformfields);
  const { email, password } = formFields;

    /*    const { setCurrentUser } = useContext(Usercontext);   este codigo utiliza el usecontext para registrar el usuario creado, sin embargo lo vamos a aplicar con onAuthStateChangedListener, un 
      metodo de firebase para escuchar cada que haya un cambio en el usuario logeado. esto simplifica el codigo*/

  const resetFormFields = () => {
    setFormFields(defaultformfields);
  };

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    await sigInwithGooglePopup();
        /*  setCurrentUser(user);   este codigo utiliza el usecontext para registrar el usuario creado, sin embargo lo vamos a aplicar con onAuthStateChangedListener, un 
      metodo de firebase para escuchar cada que haya un cambio en el usuario logeado. esto simplifica el codigo*/ 
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword1(email, password);
        /*  setCurrentUser(user);   este codigo utiliza el usecontext para registrar el usuario creado, sin embargo lo vamos a aplicar con onAuthStateChangedListener, un 
      metodo de firebase para escuchar cada que haya un cambio en el usuario logeado. esto simplifica el codigo*/  
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("La contraseña es incorrecta par este email");
          break;
        case "auth/user-not-found":
          alert("No existe un usuario asociado a este email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <Login_container onSubmit={handleSubmit}>
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
        <div className="button-container">
          <Button buttonType="default" type="submit">
            Sign Ups
          </Button>
          <Button onClick={logGoogleUser} buttonType="google" type="button">
            Gooogle Sign Ups
          </Button>
        </div>
      </div>
    </Login_container>
  );
}

const Login_container = styled.form`
  width: 400px;

  p {
    font-size: 12px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }
`;
