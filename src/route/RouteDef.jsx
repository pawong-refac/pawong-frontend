import Home from "../pages/Home";
import Login from "../domains/Login/pages/Login";
import LoginAdmin from "../domains/Login/pages/LoginAdmin";

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
