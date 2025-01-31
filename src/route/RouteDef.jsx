import Home from "../domains/Home/pages/Home";
import Login from "../domains/Login/pages/Login";
import LoginAdmin from "../domains/Login/pages/LoginAdmin";
import Notice from "../domains/Menu/pages/Notice";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Login: {
    path: "/login",
    element: <Login />,
  },
  LoginAdmin: {
    path: "/admin",
    element: <LoginAdmin />,
  },
  Notice: {
    path: "/notice",
    element: <Notice />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
