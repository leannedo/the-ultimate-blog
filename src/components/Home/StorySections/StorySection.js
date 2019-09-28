import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css/Home/StorySection.scss";

const StorySection = ({
  title,
  subtitle,
  ctaBtnTitle,
  index,
  imageName,
  direction,
  routeTo
}) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <div
      className={`story-section-container ${direction} ${
        loading ? "loading" : ""
      }`}
    >
      <div className="story-info-card">
        <div className="story-title">{title}</div>
        <div className="story-subtitle">{subtitle}</div>
        {ctaBtnTitle && (
          <Link to={`/${routeTo}`}>
            <button className="btn story-cta-btn">{ctaBtnTitle}</button>
          </Link>
        )}
      </div>
      <div className="story-index-counter">{index}</div>
      <div className="story-image">
        <img
          src={require(`../../../assets/${imageName}`)}
          alt="story-landscape"
          onLoad={imageLoaded}
        />
      </div>
    </div>
  );
};

export default StorySection;
