import "./App.css";
import Header from "./components/Common/Header/Header";
import NavBar from "./components/Common/NavBar/NavBar";
import AppPages from "./route/AppPages";
import ScrollToTop from "./hooks/ScrollToTop";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <div
        id="app"
        className="flex flex-col justify-center items-center max-w-[600px] w-full bg-pastel_gray h-full"
      >
        <div
          id="pages"
          className={
            ["/login", "/loginAdmin"].includes(location.pathname)
              ? "w-full"
              : "w-full py-14"
          }
        >
          <AppPages />
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default App;
