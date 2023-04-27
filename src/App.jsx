import { Myroutes } from "./router/routes";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CarProvider } from "./context/car.context";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CarProvider>
              <Myroutes />
            </CarProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
