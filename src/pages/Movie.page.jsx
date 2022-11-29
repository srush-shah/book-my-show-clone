import React from "react";
import { SiPaytm, SiPaypal } from "react-icons/si";

//Config
import TempPosters from "../config/TempPosters.config";

//Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const Movie = () => {
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="container px-4 my-12 lg:ml-16 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p className="text-gray-700">
            7 years after the case related to Vijay Salgaonkar and his family
            was closed, a series of unexpected events bring a truth to light
            that threatens to change everything for the Salgaonkars. Can Vijay
            save his family this time?
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-bmsOrange-100 p-3 border-2 border-dashed border-bmsOrange-300 rounded-xl">
              <div className="w-8 h-8">
                <SiPaytm className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Paytm Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Paytm transactions* on
                  BookMyShow Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-bmsOrange-100 p-3 border-2 border-dashed border-bmsOrange-300 rounded-xl">
              <div className="w-8 h-8">
                <SiPaypal className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs. 75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs. 99
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <div className="flex flex-wrap gap-4">
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg"
              castName="Ajay Devgan"
              role="Vijay Salgaonkar"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tabu-2324-30-09-2017-11-54-15.jpg"
              castName="Tabu"
              role="Actor"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/akshaye-khanna-95-24-03-2017-14-07-23.jpg"
              castName="Akshay Khanna"
              role="Actor"
            />
            <Cast
              image="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shriya-saran-2156-18-09-2017-04-10-24.jpg"
              castName="Shriya Saran"
              role="Actor"
            />
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="You Might Also Like"
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="BMS XCLUSIV"
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
