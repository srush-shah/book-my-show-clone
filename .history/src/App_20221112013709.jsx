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
      <Route path="/" element={<NameRoot />} />
      <Route path="/movie" element={<} />
    </Routes>
  );
}

export default App;
