import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" exact element={<h1></h1>}/>
    </>
  );
}

export default App;
