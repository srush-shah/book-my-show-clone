import React from "react";

const DefaultLayout = ({ props }) => {
  const Prop = props;
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      <Prop />
    </>
  );
};

export default DefaultLayout;
