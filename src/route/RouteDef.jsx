import Home from "../pages/Home";
import AddDiary from "../pages/care/AddDiary";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
  AddDiary: {
    path: "/add-diary",
    element: <AddDiary />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
