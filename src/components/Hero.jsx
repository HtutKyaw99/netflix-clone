import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliceString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1f67d42ffe4628e0ab9206c4186ae860"
      )
      .then((res) => {
        setMovies(res.data.results);
      });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  console.log(movies[currentIndex]?.backdrop_path);

  return (
    <div>
      <div className="w-full h-[550px]">
        <div className="w-full h-full">
          <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-top object-cover"
            src={`https://image.tmdb.org/t/p/original${movies[currentIndex]?.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="absolute text-white top-[20%] p-4">
          <h3 className="font-bold text-3xl md:text-6xl my-3">
            {movies[currentIndex]?.title}
          </h3>
          <button className="px-5 py-2 bg-gray-300 border border-gray-300 text-black ">
            Play
          </button>
          <button className="ml-3 px-5 py-2 text-white border border-gray-300 ">
            Watch Later
          </button>
          <p className="text-gray-400 mb-3 mt-6">
            Released : {movies[currentIndex]?.release_date}
          </p>
          <p className="text-gray-300 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {sliceString(movies[currentIndex]?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
