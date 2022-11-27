//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

//CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={<HomePage />} />
      <DefaultHOC path="/movie/:id" exact element={<Movie />} />
    </>
  );
}

export default App;
