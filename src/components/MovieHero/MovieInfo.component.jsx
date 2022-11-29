import React, { useContext } from "react";

//Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", "); //optional chaining technique
  //movie.genres && movie.genres.map(({ name }) => name).join(", ");
  const languages = movie.spoken_languages?.map(({ name }) => name).join(", ");
  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premiere tag"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs text-white rounded-md">
            Streaming Now
          </span>
        </div>
        <h1 className="hidden lg:block text-white lg:text-5xl font-bold">
          {movie.title}
        </h1>
        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>
              4K &bull; {languages} &bull; {movie.adult ? "18+" : "M"}{" "}
            </h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull;{" "}
              {movie.release_date}
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full py-2">
            <button className="bg-bmsRed-300 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button className="bg-bmsRed-300 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹369
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
