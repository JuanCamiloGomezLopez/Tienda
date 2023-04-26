import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Directory/Home";
import { Navigationbar } from "../Components/Directory/Navigation";
import { Authentication } from "../Components/Directory/athentication";
import { Shop } from "../Components/Directory/shop-component"
import { Checkout_component } from "../Components/Directory/Checkout_component";


export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout_component />} />
      </Route>
    </Routes>
  );
}
