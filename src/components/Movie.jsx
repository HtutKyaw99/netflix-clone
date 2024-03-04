import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
  return (
    <div className="cursor-pointer min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] relative">
      <img
        className="w-full h-auto "
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="w-full h-full opacity-0 hover:opacity-80 hover:bg-black absolute top-0 left-0">
        <p className="text-white text-sm md:text-base flex justify-center items-center h-full">
          {movie.title}
        </p>
        <p className="text-white absolute top-3 left-3">
          <FaRegHeart />
        </p>
      </div>
    </div>
  );
};

export default Movie;
