import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header/Header";
import NavBar from "./components/Common/NavBar/NavBar";
import AppPages from "./route/AppPages";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div
        className="flex flex-col items-center w-full h-screen bg-light_gray"
      >
        <AppPages />
      </div>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
