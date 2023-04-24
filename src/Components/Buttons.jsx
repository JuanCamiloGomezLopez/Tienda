import styled from "styled-components";

export function Button ({ children, buttonType, ...otherprops }){

  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    invert: "inverted",
  };

  return (
    <Button_styled
      className={BUTTON_TYPE_CLASSES[buttonType]}
      {...otherprops}
    >
      {children}
    </Button_styled>
  );
};

const Button_styled = styled.button`
    min-width: 165px;
    width: auto;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 40px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.6s;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &.google-sign-in {
      background-color: #4285f4;
      color: white;

      &:hover {
        background-color: #357ae8;
        border: none;
      }
    }

    &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;

      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    }
  
`;


