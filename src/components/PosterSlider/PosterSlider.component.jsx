import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//Config
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={` ${
            props.isDark ? "text-white" : "text-gray-800"
          } text-2xl font-bold`}
        >
          {props.title}
        </h3>
        <p
          className={`${props.isDark ? "text-white" : "text-gray-800"} text-sm`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...PosterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
