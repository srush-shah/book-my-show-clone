import React from "react";

//Components
import MovieNavbar from "../components/Navbar/movieNavbar.component";

const MovieLayout = ({ element: Element, ...props }) => {
  return (
    <>
      <MovieNavbar />
      {Element}
    </>
  );
};

export default MovieLayout;
