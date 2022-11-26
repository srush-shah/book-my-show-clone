import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premiere = () => {
  const PremiereImages = [
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
    {
      src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00076943-kxbgajbmzr-portrait.jpg",
      title: "Top Gun: Maverick",
      subtitle: "English",
    },
  ];
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold">Premieres</h3>
        <p className="text-white text-sm">Brand new releases every Friday</p>
      </div>
      <Slider {...settings}>
        {PremiereImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premiere;
