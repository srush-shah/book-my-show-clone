import React from "react";

const DefaultLayout = ({ props }) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {children}
    </>
  );
};

export default DefaultLayout;
