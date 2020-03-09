import React, {useState} from "react";
import HeroBanner from "../components/Home/HeroBanner";
import StoryList from "../components/Home/StorySections/StoryList";

const Home = () => {
  const [bannerLoaded, setIsBannerLoaded] = useState(false);
  return (
    <div className="homepage-index page-index">
      <HeroBanner imageName="herobanner.jpg" setIsBannerLoaded={setIsBannerLoaded}/>
      {
        bannerLoaded && (
          <StoryList />
        )
      }
    </div>
  );
};

export default Home;
