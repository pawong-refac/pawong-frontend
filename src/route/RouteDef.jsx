import Home from "../domains/Home/pages/Home";

const MainScreens = {
  Home: {
    path: "/",
    element: <Home />,
  },
};

export const AppRouteDef = {
  ...MainScreens,
};
