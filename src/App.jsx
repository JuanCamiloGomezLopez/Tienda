import { Myroutes } from "./router/routes";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/product.context";
import { CarProvider } from "./context/car.context";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <CarProvider>
              <Myroutes />
            </CarProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
