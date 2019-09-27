import React from "react";
import HeroBanner from "../components/Home/HeroBanner";
import StoryList from "../components/Home/StorySections/StoryList";

const Home = () => {
  return (
    <div className="homepage-index">
      <HeroBanner imageName="herobanner.jpg" />
      <StoryList />
    </div>
  );
};

export default Home;
