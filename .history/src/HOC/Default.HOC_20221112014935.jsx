import React from "react";
import { Route, Routes } from "react-router-dom";

const DefaultHOC = ({ component, ...props }) => {
  return (
    <>
      <Routes>
        <Route {}/>
      </Routes>
    </>
  );
};

export default DefaultHOC;
