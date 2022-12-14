import React from "react";
import { Route, Routes } from "react-router-dom";

//Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Element, ...rest }) => {
  return (
    <>
      <Routes>
        <Route {...rest} element={<DefaultLayout element={Element} />} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
