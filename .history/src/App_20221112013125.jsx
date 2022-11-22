import { Route } from "react-router-dom";

function NameRoot() {
  return <h1></h1>
}

function App() {
  return (
    <>
      <Route path="/" component={<h1>Hello Root</h1>} />
      <Route path="/movie" component={<h1>Hello Movie</h1>} />
    </>
  );
}

export default App;
