import React, { useContext, useState, useEffect } from "react";
import { SiPaytm, SiPaypal } from "react-icons/si";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

//Component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//Context
import { MovieContext } from "../context/movie.context";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);
  useEffect(() => {
    const requestRecommended = async () => {
      const getRecommended = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommended.data.results);
    };
    requestRecommended();
  }, [id]);

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

  const settingsCast = {
    infinite: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
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
      <MovieHero />
      <div className="container px-4 my-12 lg:ml-16 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
          <p className="text-gray-700">{movie.overview}</p>
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
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={similarMovies}
            title="You Might Also Like"
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={recommended}
            title="BMS XCLUSIV"
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
