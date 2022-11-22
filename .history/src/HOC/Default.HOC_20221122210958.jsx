import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC =
  ({ element: Element, ...rest }) =>
  ({ ...props }) =>
    (
      <>
      <Routes>
        <Route
          {...rest}
          element={
            <DefaultLayout>
              <Element {...props} />
            </DefaultLayout>
          }
        />
      </>
    );

export default DefaultHOC;
