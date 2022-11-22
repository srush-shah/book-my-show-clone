import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Element, ...rest }) => {
  // Props that we are getting are: path, exact, element
  function DefLayout(props) => (
    <DefaultLayout>
      <Element {...props} />
    </DefaultLayout>
  )
  return (
    <>
      <Routes>
        <Route
          {...rest}
          element={<DefLayout>}
        />
      </Routes>
    </>
  );
};

export default DefaultHOC;
