import "./App.css";
import Header from "./components/Common/Header/Header";
import NavBar from "./components/Common/NavBar/NavBar";
import AppPages from "./route/AppPages";

function App() {
  return (
    <div
      id="app"
      className="flex flex-col items-center w-full h-screen bg-light_gray"
    >
      <Header />
      <AppPages />
      <NavBar />
    </div>
  );
}

export default App;
