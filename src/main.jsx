import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AuthProvider from "./Provider/AuthProvider";
import Order from "./Components/Order";
import PrivetRoute from "./Route/PrivetRoute";
import Profile from "./Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/order",
        element:  <PrivetRoute> <Order></Order></PrivetRoute> ,
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
