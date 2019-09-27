import React from "react";
import HeroBanner from "../components/Home/HeroBanner";
import StorySectionContainer from "../components/Home/StorySections/StorySectionContainer";

const Home = () => {
  return (
    <div className="homepage-index">
      <HeroBanner />
      <StorySectionContainer />
    </div>
  );
};

export default Home;
