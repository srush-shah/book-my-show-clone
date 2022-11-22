import { Route, Routes } from "react-router-dom";

function NameRoot() {
  return <h1>Hello Root</h1>;
}
function NameMovie() {
  return <h1>Hello Movie</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" component={NameRoot} />
      <Route path="/movie" component={NameMovie} />
    </Routes>
  );
}

export default App;
