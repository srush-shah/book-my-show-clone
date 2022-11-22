import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={}/>
    </>
  );
}

export default App;
