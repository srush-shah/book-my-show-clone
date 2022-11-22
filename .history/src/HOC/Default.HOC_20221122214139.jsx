import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";
function DefaultLayoutTag(props) {
  return <>
  <DefaultLayout>
    
  </DefaultLayout>
  </>
}
const DefaultHOC = ({ element: Element, ...rest }) => {
  return (
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
      </Routes>
    </>
  );
};

export default DefaultHOC;
