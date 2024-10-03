import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/restaurantManu/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
import { Footer } from "./components/Footer";
import { UserContext } from "./utils/UserContext";
// import { Grocery } from './components/Grocery'

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //API Call

    // const data = {
    //   name: "Jay",
    // };

    // setUserName(data?.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>

      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <div className="h-[80px]"></div>
          <Outlet />
        </div>
        <Footer />
      </div>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
