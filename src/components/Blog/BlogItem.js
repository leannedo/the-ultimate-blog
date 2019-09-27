import React from "react";
import "../../css/Blog/BlogItem.scss";

const BlogItem = ({ title, description, date, imageName }) => {
  return (
    <div className="blog-item-card">
      <div className="blog-item-image">
        {imageName && (
          <img
            src={require(`../../assets/${imageName}`)}
            alt="blog-illustration"
          />
        )}
      </div>
      <div className="blog-item-info">
        <div className="blog-item-title">{title}</div>
        <div className="blog-item-date">{date}</div>
        <div className="blog-item-description">{description}</div>
      </div>
    </div>
  );
};

export default BlogItem;
