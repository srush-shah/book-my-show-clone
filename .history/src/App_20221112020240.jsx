import { Route, Routes } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={Temp} />
    </>
  );
}

export default App;
