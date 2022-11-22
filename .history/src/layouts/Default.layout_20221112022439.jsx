import React from "react";

const DefaultLayout = (props) => {
  return (
    <>
      <h1 className="text-xl">Default Layout</h1>
      {{homes.map(home => <div>{home.name}</div>)}}
    </>
  );
};

export default DefaultLayout;
