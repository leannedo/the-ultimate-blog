import React from "react";
import banner from "./../../assets/herobanner.jpg";
import "../../css/Blog/BlogBanner.scss";

const BlogBanner = ({title, subtitle}) => {
  return (
    <div className="blog-banner-container">
      <img src={banner} alt="blog-banner" />
      <div className="text-center">
        <h2 className="blog-banner-title">{title}</h2>
        <h2 className="blog-banner-subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};

export default BlogBanner;
