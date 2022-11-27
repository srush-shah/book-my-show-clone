import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";

const MovieLayout = ({ element: Element, ...props }) => {
  return (
    <>
      <Navbar />
      {Element}
    </>
  );
};

export default MovieLayout;
