import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Element, ...rest }) => {
  return (
    <>
      <Routes>
        <Route {...rest} exact element={<De} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
