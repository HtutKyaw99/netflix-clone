import React from "react";
import Hero from "../components/Hero";
import MoviesSlider from "../components/MoviesSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <MoviesSlider title="upcoming" />
    </div>
  );
};

export default Home;
