import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouterLayout} from "./components/header/RouterLayout";
import {Home} from "./components/pages/Home";
import {CartContextProvider} from "./components/store/CartContext";
import {UserProgressContextProvider} from "./components/store/UserProgressContext";
import {Cart} from "./components/pages/Cart";
import {Payment} from "./components/pages/Payment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])

function App() {

  return (
      <UserProgressContextProvider>
        <CartContextProvider>
          <RouterProvider router={routes}/>
          <Cart/>
          <Payment/>
        </CartContextProvider>
      </UserProgressContextProvider>
  );
}

export default App;
