import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Pages/Home";
import { Navigationbar } from "../Components/Pages/Navigation";
import { Authentication } from "../Components/Pages/athentication";
import { Shop } from "../Components/Pages/shop-component";
import { Checkout_component } from "../Components/Pages/Checkout_component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { setCurrentUser } from "../store/user/user.reduce";

export function Myroutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigationbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout_component />} />
      </Route>
    </Routes>
  );
}
