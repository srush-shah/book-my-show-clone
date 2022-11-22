import React from "react";
import { Route, Routes } from "react-router-dom";

const DefaultHOC = ({ component, ...props }) => {
  return (
    <>
      <Routes>
        <Route {...props}/>
      </Routes>
    </>
  );
};

export default DefaultHOC;
