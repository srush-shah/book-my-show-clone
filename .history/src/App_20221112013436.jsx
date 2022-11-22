import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact component={<h1>Hello Root</h1>} />
      <Route path="/movie" component={<h1></h1>} />
    </Routes>
  );
}

export default App;
