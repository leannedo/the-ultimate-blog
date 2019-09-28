import React from "react";
import banner from "./../../assets/herobanner.jpg";
import "../../css/Blog/BlogBanner.scss";

const BlogBanner = () => {
  return (
    <div className="blog-banner-container">
      <img src={banner} alt="blog-banner" />
      <div className="text-center">
        <h2 className="blog-banner-title">Nothing ventured</h2>
        <h2 className="blog-banner-subtitle">My thoughts on code</h2>
      </div>
    </div>
  );
};

export default BlogBanner;
