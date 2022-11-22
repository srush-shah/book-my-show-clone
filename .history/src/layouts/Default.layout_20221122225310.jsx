import React from "react";

const DefaultLayout = ({element: Element, }) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {props.children}
    </>
  );
};

export default DefaultLayout;
