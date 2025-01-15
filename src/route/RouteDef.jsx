import Home from "../pages/Home";
import Login from "../pages/Login";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Login: {
    path: "/login",
    element: <Login />
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
