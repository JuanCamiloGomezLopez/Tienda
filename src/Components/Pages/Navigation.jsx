import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_commerce.svg";
import { selectIsCarOpen } from "../../store/cart/cart.selector";


import { sigOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../Car-component/car-icon.component";
import { CarDropdown } from "../Car-component/car-dropdown";
import { useSelector } from "react-redux";

export function Navigationbar() {

  const currentUser = useSelector((state)=>state.user.currentUser)
  const caropen = useSelector(selectIsCarOpen);

  const seignOuthandler = async () => {
    await sigOutUser();  
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={seignOuthandler}>
              {" "}
              SIGN OUT{" "}
            </span>
            
          ) : (
            <Link className="nav-links-container" to="/authentication">
              SIGN IN
            </Link>
          )}
          {currentUser ? <span>{currentUser.email}</span> : null}

          <CartIcon />
        </div>
        {
          caropen &&  <CarDropdown />
        }
       
      </Navigation>

      <Outlet />
    </Fragment>
  );
}

const Navigation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;  
  height: 80px;
  position: relative;
  margin: 0 auto;


  .nav-logo-container {
    display: flex;
    align-items: center;
    img {
      width: 50px;
    }
    h3 {
      margin-left: 10px;
    }
  }

  .nav-links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 0 20px;
    }

    span{
      padding: 0 20px;
      cursor: pointer;
    }

    img {
      width: 40px;
      margin-bottom: 5px;
    }
  }
`;
