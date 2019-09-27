import React, { useState, useEffect } from "react";
import "../../../css/Home/StorySection.scss";

const StorySection = ({
  title,
  subtitle,
  ctaBtnTitle,
  index,
  imageName,
  direction
}) => {
  return (
    <div className={`story-section-container ${direction}`}>
      <div className="story-info-card">
        <div className="story-title">{title}</div>
        <div className="story-subtitle">{subtitle}</div>
        {ctaBtnTitle && (
          <button className="btn story-cta-btn">{ctaBtnTitle}</button>
        )}
      </div>
      <div className="story-index-counter">{index}</div>
      <div className="story-image">
        <img
          src={require(`../../../assets/${imageName}`)}
          alt="story-landscape"
        />
      </div>
    </div>
  );
};

export default StorySection;
