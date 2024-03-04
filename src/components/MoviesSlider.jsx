import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const MoviesSlider = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1f67d42ffe4628e0ab9206c4186ae860"
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(movies);
  return (
    <div className="p-3">
      <h3 className="text-white capitalize font-bold md:text-xl mb-3">
        {title}
      </h3>
      <div className="flex items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide">
        {movies?.map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSlider;
