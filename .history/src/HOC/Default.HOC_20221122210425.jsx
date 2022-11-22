import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC =
  ({ element: Element, ...rest }) =>
  ({ ...props }) =>
    (
      <>
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
