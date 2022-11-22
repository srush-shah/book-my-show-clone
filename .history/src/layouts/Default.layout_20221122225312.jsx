import React from "react";

const DefaultLayout = ({element: Element, ...props}) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {props.children}
    </>
  );
};

export default DefaultLayout;
