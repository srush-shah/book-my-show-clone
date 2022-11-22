import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Element, ...rest }) => {({...prop})
  // Props that we are getting are: path, exact, element

  return (
    <>
      <Routes>
        <Route
          {...rest}
          element={
            <DefaultLayout>
              <Element />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
};

export default DefaultHOC;
