import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Pages/Home";
import { Navigationbar } from "../Components/Pages/Navigation";
import { Authentication } from "../Components/Pages/athentication";
import { Shop } from "../Components/Pages/shop-component"
import { Checkout_component } from "../Components/Pages/Checkout_component";


export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar/>}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout_component />} />
      </Route>
    </Routes>
  );
}
