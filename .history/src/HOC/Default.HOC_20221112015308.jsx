import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element, ...props }) => {
  // Props that we are getting are: path, exact, element
  return (
    <>
      <Routes>
        <Route {...props} element={(props) => <DefaultLayout>
            
        </DefaultLayout>} />
      </Routes>
    </>
  );
};

export default DefaultHOC;
