import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Element, ...rest }) => 
  ({ ...props }) => (<>
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
  </>);
  // Props that we are getting in ...rest are: path, exact

  return (
    
  );

export default DefaultHOC;
