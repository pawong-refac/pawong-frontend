import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header/Header";
import NavBar from "./components/Common/NavBar/NavBar";
import AppPages from "./route/AppPages";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div
        id="app"
        className="flex flex-col justify-center items-center w-full bg-pastel_gray h-full"
      >
        <ScrollToTop />
        <Header />
        <AppPages />
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
