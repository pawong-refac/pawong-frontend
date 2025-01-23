import Home from "../pages/Home";
import Login from "../domains/Login/pages/Login";
import LoginAdmin from "../domains/Login/pages/LoginAdmin";
import AddDiary from "../domains/Diary/pages/AddDiary";
import DetailDiary from "../domains/Diary/pages/DetailDiary";
import ListDiary from "../domains/Diary/pages/ListDiary";

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
  DetailDiary: {
    path: "/detail-diary",
    element: <DetailDiary />,
  },
  DiaryList: {
    path: "/list-diary",
    element: <ListDiary />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
