import React from "react";
import Dashboard from "./components/Dashboard";
const Login = React.lazy(() => import("./components/Login"));
export const routes = [
  {
    path: "/",
    element: Dashboard,
    exact: true,
  },
  {
    path: "/login",
    element: Login,
    exact: false,
  },
];
