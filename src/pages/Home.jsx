import React from "react";
import Hero from "../components/Hero";
import MoviesSlider from "../components/MoviesSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <MoviesSlider title="now_playing" />
      <MoviesSlider title="top_rated" />
    </div>
  );
};

export default Home;
