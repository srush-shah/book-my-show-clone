import React from "react";

const DefaultLayout = ({ element: Element, ...props }) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {Element}
    </>
  );
};

export default DefaultLayout;
