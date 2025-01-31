import Home from "../domains/Home/pages/Home";
import Login from "../domains/Login/pages/Login";
import AddDiary from "../domains/Diary/pages/AddDiary";
import DetailDiary from "../domains/Diary/pages/DetailDiary";
import ListDiary from "../domains/Diary/pages/ListDiary";
import LoginAdmin from "../domains/Admin/pages/LoginAdmin";
import NewUserInfo from "../domains/UserInfo/pages/NewUserInfo";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Login: {
    path: "/login",
    element: <Login />,
  },
  AddDairy: {
    path: "/add-diary",
    element: <AddDiary />,
  },
  DetailDiary: {
    path: "/detail-diary",
    element: <DetailDiary />,
  },
  DiaryList: {
    path: "/list-diary",
    element: <ListDiary />,
  },
  LoginAdmin: {
    path: "/loginAdmin",
    element: <LoginAdmin />,
  },
  NewUserForm: {
    path: "/userInfo/new",
    element: <NewUserInfo />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
