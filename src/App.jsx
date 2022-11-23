import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={<HomePage />} />
    </>
  );
}

export default App;
