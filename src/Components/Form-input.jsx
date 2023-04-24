import styled from "styled-components";

export function FormInput({ label, ...otherProps }) {
  return (
    <Container>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  margin: 30px 0;

  .form-input-label {
    color: #969696;
    font-size: 13px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
 
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -12px;
      font-size: 11px;
      color: black;
      font-weight: 400;
    }
  }

  .form-input {
    background: none;  
    color: gray;
    font-size: 18px;
    padding: 10px 10px 10px 0px;
    display: block;
    width: 100%;   
    border: none; 
    border-bottom: 1px solid rgb(0, 0, 0); 
    font-size: 13px;    

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      top: -12px;
      font-size: 11px;
      font-weight: 400;
      color: black;
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
