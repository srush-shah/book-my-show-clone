import React from "react";
import { Route, Routes } from "react-router-dom";

const DefaultHOC = ({ element, ...props }) => {
    // Props that we are getting are: 
  return (
    <>
      <Routes>
        <Route {...props} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
