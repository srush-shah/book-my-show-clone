import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ element: Element, ...rest }) => {
  return (
    <>
      <Routes>
        <Route {...rest} element={<MovieLayout element={Element} />} />
      </Routes>
    </>
  );
};

export default MovieHOC;
