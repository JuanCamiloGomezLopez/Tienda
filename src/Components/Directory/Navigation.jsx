import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_commerce.svg";
import bag from "../../assets/bag.svg";

export function Navigationbar() {
  return (
    <Fragment>
      <Navigation>
        <Link className="nav-logo-container" to="/">
          <img src={logo} />
          <h3>E-COMMERCE</h3>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-links-container" to="/shop">
            SHOP
          </Link>
          <Link className="nav-links-container" to="/shop">
            CONTACT
          </Link>
          <Link className="nav-links-container" to="/sign">
            SIGN IN
          </Link>
          <img src={bag} />
        </div>
      </Navigation>

      <Outlet />
    </Fragment>
  );
}

const Navigation = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 80px;
  position: relative;
  margin: 0 auto;
  

  .nav-logo-container {
    display: flex;
    align-items: center;
    img {
    width: 50px;
  }
  h3{
    margin-left: 10px;
  }

  }

  .nav-links-container{
    display: flex;
  align-items: center;
  justify-content: space-between;

    A{
      padding: 0 20px;
    }

    img{
      width: 40px;
      margin-bottom: 5px;
      
    }

  }

  
`;
