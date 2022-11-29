import React from "react";
import { SiPaytm, SiPaypal } from "react-icons/si";
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
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
      </div>
    </>
  );
};

export default Movie;
