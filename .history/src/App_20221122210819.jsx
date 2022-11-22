//import DefaultHOC from "./HOC/Default.HOC";
//import Temp from "./components/temp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<h1>Hello Root</h1>} />
      <Route path="/movie" exact element={<h1>Movie Page</h1>} />
    </>
  );
}

export default App;
