import React from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//confg
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 mt-4">
          <h4 className="text-2xl font-bold text-gray-800 my-3">
            The Best of Entertainment
          </h4>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bmsBlue-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premiere and Rupay"
              />
            </div>
            <PosterSlider
              images={TempPosters}
              title="Premieres"
              subtitle="Brand new releases every Friday"
              isDark
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Online Streaming Events" />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Outdoor Events" />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Laughter Therapy" />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Popular Events" />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="The Latest Plays" />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Top Games and Sports Events"
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider images={TempPosters} title="Explore Fun Activities" />
      </div>
    </>
  );
};

export default HomePage;
