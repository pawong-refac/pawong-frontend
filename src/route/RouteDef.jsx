import Home from "../pages/Home";
import Login from "../pages/Login";
import LoginAdmin from "../pages/LoginAdmin";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Login: {
    path: "/login",
    element: <Login />
  },
  LoginAdmin: {
    path: "/admin",
    element: <LoginAdmin />
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
