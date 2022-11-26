import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premiere from "../components/Premiere/Premiere.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-bold text-gray-800 my-3">
          The Best of Entertainment
        </h4>
        <EntertainmentCardSlider />
        <Premiere />
      </div>
    </>
  );
};

export default HomePage;
