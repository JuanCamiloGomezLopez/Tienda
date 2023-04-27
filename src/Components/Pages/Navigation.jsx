import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_commerce.svg";
import { Usercontext } from "../../context/user.context";
import { CarContext } from "../../context/car.context";
import { sigOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../Car-component/car-icon.component";
import { CarDropdown } from "../Car-component/car-dropdown";

export function Navigationbar() {

  const { currentUser, setCurrentUser } = useContext(Usercontext);
  const { caropen, setCaropen } = useContext(CarContext);

  const seignOuthandler = async () => {
    await sigOutUser();  
  };console.log(currentUser)

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
