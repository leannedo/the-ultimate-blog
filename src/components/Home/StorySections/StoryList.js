import React from "react";
import stories from "../../../data/stories";
import StorySection from "./StorySection";
import "../../../css/Home/StoryList.scss";

const StoryList = () => {
  const renderStorySections = stories => {
    return stories.map((story, index) => (
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
      {stories && renderStorySections(stories)}
    </div>
  );
};

export default StoryList;
