// ## Namaste React by Gideon Odiokine
import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Login from "./components/Login.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
import Header from './components/Header.js';
import Bodyi from './components/Bodyi.js';
import Body from './components/Body.js';

/* My Food App structure will look like this,
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights

*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

// call createBrowserRouter for routing different pages
export const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
