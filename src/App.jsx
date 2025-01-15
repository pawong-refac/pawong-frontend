import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div
      id="app"
      className="flex flex-col justify-center items-center w-full bg-light_gray h-screen"
    >
      <DefaultLayout />
    </div>
  );
}

export default App;
