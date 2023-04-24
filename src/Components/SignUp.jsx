import styled from "styled-components";
import { useState } from "react";
import {
  createUserWithEmailAndPassword1,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { FormInput } from "./Form-input";
import { Button } from "./Buttons";

export function SignUp() {
  const defaultformfields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultformfields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformfields);
  };

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      /*creamos el usuario (usuario y contraseña) con el metodo createUserWithEmailAndPassword1*/
      const { user } = await createUserWithEmailAndPassword1(email, password);
      /*enviamos la info del usuario a la base de datos users con el metodo createUserDocumentFromAuth enviamkos el user y el display name ya que el metrodo no recibe dosplayname*/
      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("no puede crear una cuenta con un email ya registrado");
      } else {
        console.log("se encointro el error", error);
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <h2>I do not have an count</h2>
      <p>Sign up with your email and password</p>

      <FormInput
        type="text"
        label="Name"
        required
        onChange={onchangeinput}
        name="displayName"
        value={displayName}
      />

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

      <FormInput
        type="password"
        label="Confirm Password"
        required
        onChange={onchangeinput}
        name="confirmPassword"
        value={confirmPassword}
      />

      <Button buttonType="default" type="submit">Sign Ups</Button>
    </Container>
  );
}

const Container = styled.form`
  width: 450px;
  position: relative;

  p {
    font-size: 12px;
  }
 
`;
