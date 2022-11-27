import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//Config
import PosterCarouselSettings from "../../config/PosterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold">{props.title}</h3>
        <p className="text-white text-sm">{props.subtitle}</p>
      </div>
      <Slider {...PosterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
