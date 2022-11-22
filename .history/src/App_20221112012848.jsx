import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/" component={<h1>Hello Root</h1>} />
      <Route path="/" component={<h1>Hello Root</h1>} />
    </>
  );
}

export default App;
