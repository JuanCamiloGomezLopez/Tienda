import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Directory/Home";
import { Navigationbar } from "../Components/Directory/Navigation";
import { Authentication } from "../Components/Directory/athentication";


const Shoping = () => {
  return <h1>Estoy en shoping</h1>;
};

export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shoping />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
}
