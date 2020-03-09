import React, { useState } from "react";
import "../../css/Home/HeroBanner.scss";

const HeroBanner = ({ imageName, setIsBannerLoaded }) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
    setIsBannerLoaded(true)
  };

  return (
    <div className={`hero-banner-container ${loading ? "loading" : ""}`}>
      {imageName && (
        <img
          src={require(`./../../assets/${imageName}`)}
          alt="hero-banner"
          onLoad={imageLoaded}
        />
      )}

      <h1 className="hero-banner-text">Right Brain Learns Code</h1>
    </div>
  );
};

export default HeroBanner;
