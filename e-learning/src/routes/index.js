import { lazy } from "react";

import NotFound from "components/NotFound";
import HomePage from "modules/Home/pages/HomePage";


// login-register
const Login = lazy(()=>import("../modules/Auth/pages/Login"))
const Register = lazy(()=>import("../modules/Auth/pages/Register"))



const routes = [
  //normal access
  {
    path: "/",
    element: <HomePage />
  },
  //login-register
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },


  {
    path: "*",
    element: <NotFound />
  },
];

export default routes;
