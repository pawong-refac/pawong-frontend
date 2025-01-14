import "./App.css";
import Header from "./components/Common/Header/Header";
import NavBar from "./components/Common/NavBar/NavBar";
import AppPages from "./route/AppPages";

function App() {
  return (
    <div
      id="app"
      className="flex flex-col justify-center items-center w-full bg-light_gary h-screen"
    >
      <Header />
      <AppPages />
      <NavBar />
    </div>
  );
}

export default App;
