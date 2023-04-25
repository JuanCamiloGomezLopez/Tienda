import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Directory/Home";
import { Navigationbar } from "../Components/Directory/Navigation";
import { Authentication } from "../Components/Directory/athentication";
import { Shop } from "../Components/Directory/shop-component"


export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
}
