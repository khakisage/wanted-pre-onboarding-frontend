import { Navigate, useRoutes } from "react-router-dom";
import Main from "../Pages/Main";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import Todo from "../Pages/Todo";

const Router = () => {
  const isAuth = localStorage.getItem("JWT");

  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/signup",
      element: isAuth ? <Navigate replace to="/todo" /> : <Signup />,
    },
    {
      path: "/signin",
      element: isAuth ? <Navigate replace to="/todo" /> : <Signin />,
    },
    {
      path: "/todo",
      element: isAuth ? <Todo /> : <Navigate replace to="/signin" />,
    },
  ]);
  return routes;
};

export default Router;
