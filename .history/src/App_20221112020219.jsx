import { Route, Routes } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";

function App() {
  return (
    <>
      <DefaultHOC path="/" />
    </>
  );
}

export default App;
