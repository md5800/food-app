import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Instamart = lazy(()=>import("./components/Instamart"));

const AppComponent = () =>{
// ex for context
const [userName, setUserName] = useState();
useEffect(()=>{
  const data = {
    name: "Mohuya Dutta",
  };
  setUserName(data.name);
}, [])

return (
  <Provider store={appStore}>
     {/* UserContext value is default value here */}
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        {/* UserContext value is Mohuya Dutta here */}
        <div className="app">
            {/* <UserContext.Provider value={{loggedInUser: "Test Context"}}>
              <Header />
            </UserContext.Provider> */}
            <Header />
            <div className="bodywarpper">
              <Outlet />
            </div>
        </div>
      </UserContext.Provider>
  </Provider>
);
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent/>,
    children : [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Instamart/>
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>,
  }
]);

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(<RouterProvider router={appRouter} />);