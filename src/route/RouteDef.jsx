import Home from "../pages/Home";
import Login from "../domains/Login/pages/Login";
import LoginAdmin from "../domains/Admin/pages/LoginAdmin";
import NewUserInfo from "../domains/UserInfo/pages/NewUserInfo";

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
    path: "/loginAdmin",
    element: <LoginAdmin />
  },
  NewUserForm: {
    path: "/userInfo/new",
    element: <NewUserInfo />
  }
};

export const AppRouteDef = {
  ...MainScreens,
};
