//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

//CSS Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact element={<HomePage />} />
      <MovieHOC path="/movie/:id" exact element={<Movie />} />
      <DefaultHOC path="/plays" exact element={<Plays />} />
    </>
  );
}

export default App;
