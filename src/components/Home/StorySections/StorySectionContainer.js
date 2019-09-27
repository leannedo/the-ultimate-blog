import React from "react";
import storyData from "./storyData";
import StorySection from "./StorySection";

const StorySectionContainer = () => {
  const renderStorySections = storyData => {
    return storyData.map((story, index) => (
      <StorySection
        {...story}
        key={index}
        index={index + 1}
        direction={index % 2 ? "rtl" : "ltr"}
      />
    ));
  };

  return (
    <div className="story-section-list">
      {storyData && renderStorySections(storyData)}
    </div>
  );
};

export default StorySectionContainer;
