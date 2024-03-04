import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const MoviesSlider = ({ title }) => {
  const [movies, setMovies] = useState([]);

  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${title}?api_key=1f67d42ffe4628e0ab9206c4186ae860`
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(movies);
  return (
    <div className="p-3 ">
      <h3 className="text-white capitalize font-bold md:text-xl mb-3 ">
        {title !== "now_playing" ? "Top Rated" : "In Cinema"}
      </h3>
      <div className="flex group relative items-center">
        <FaArrowCircleRight
          onClick={scrollRight}
          className="absolute text-white right-0 z-10 hidden group-hover:block"
          fontSize={36}
        />
        <div
          ref={sliderRef}
          className=" group flex items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {movies?.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </div>
        <FaArrowCircleLeft
          onClick={scrollLeft}
          className="absolute text-white left-0 z-10 hidden group-hover:block"
          fontSize={36}
        />
      </div>
    </div>
  );
};

export default MoviesSlider;
