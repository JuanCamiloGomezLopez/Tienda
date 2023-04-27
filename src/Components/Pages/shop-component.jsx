import { Route, Routes } from "react-router-dom";
import { Category_component } from "../catergory-component";
import { Category } from "../category";

export function Shop() {

  return (
    <Routes>
      <Route index element={<Category_component />}/>     
      <Route path=":category" element={<Category />}/>    
    </Routes>   
  );
}

