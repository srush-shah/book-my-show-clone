import { Route } from "react-router-dom";

function NameRoot() {
  
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