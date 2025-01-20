import Home from "../pages/Home";
import Login from "../domains/Login/pages/Login";
import LoginAdmin from "../domains/Login/pages/LoginAdmin";
import AddDiary from "../domains/Care/pages/AddDiary";

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
  AddDairy: {
    path: "/add-diary",
    element: <AddDiary />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
