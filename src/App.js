// Import necessary packages and components
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

// Lazy load components
const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const Cart = lazy(() => import("./components/Cart"));
const OrderPlaced = lazy(() => import("./components/Orderplaced"));
const Help = lazy(() => import("./components/Help"));
const LoginSignup = lazy(() => import("./components/LoginSignup"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Suspense fallback={<Shimmer />}>
        <Outlet />
      </Suspense>
    </Provider>
  );
};

// Define the app router with routes
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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About name="Foodie" />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/order",
        element: (
          <Suspense fallback={<Shimmer />}>
            <OrderPlaced />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LoginSignup /> {/* Use LoginSignup for login */}
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LoginSignup /> {/* Reuse LoginSignup for signup */}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

// Render the app to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
