import React from "react";
import { Route, Routes } from "react-router-dom";

const DefaultHOC = ({ element, ...props }) => {
  // Props that we are getting are: path, exact, element
  return (
    <>
      <Routes>
        <Route {...props} element={(props) => <DEv} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
