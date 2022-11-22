import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";

const DefaultLayout = ({ element: Element, ...props }) => {
  return <>
  
  {Element}
  </>;
};

export default DefaultLayout;
