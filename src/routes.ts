import React from "react";
import Dashboard from "./components/Dashboard";
const Login = React.lazy(() => import("./components/Login/Login"));
export const routes = [
  {
    path: "/",
    element: Dashboard,
  },
  {
    path: "/login",
    element: Login,
  },
];
