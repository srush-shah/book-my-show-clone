import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={<Temp />} />
    </>
  );
}

export default App;
