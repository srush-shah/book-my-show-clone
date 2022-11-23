import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = ({ element: Element, ...props }) => {
  return (
    <>
      <Navbar />
      {Element}
    </>
  );
};

export default DefaultLayout;
