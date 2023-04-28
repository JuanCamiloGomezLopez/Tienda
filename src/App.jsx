import { Myroutes } from "./router/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>   
          <Myroutes />       
      </BrowserRouter>
    </>
  );
}

export default App;
