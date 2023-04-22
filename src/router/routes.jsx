import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../Components/Directory/Home";
import { Navigationbar } from "../Components/Directory/Navigation";
import { Sign_in } from "../Components/Directory/Sign-in";


const Shoping = () => {
  return <h1>Estoy en shoping</h1>;
};

export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigationbar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shoping />} />
        <Route path="sign" element={<Sign_in />} />
      </Route>
    </Routes>
  );
}
