import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" exact component={<h1></h1>} />
      <Route path="/movie" component={NameMovie} />
    </Routes>
  );
}

export default App;
