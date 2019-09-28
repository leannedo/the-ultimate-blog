import React from "react";
import { Link } from "react-router-dom";
import "../../css/Blog/BlogItem.scss";

const BlogItem = ({ id, title, description, date, imageName, mdFileName }) => {
  const getPostSlug = () => {
    return title
      ? title
          .trim()
          .toLowerCase()
          .split(" ")
          .join("-")
      : "";
  };

  return (
    <Link
      to={{
        pathname: `/post/${getPostSlug()}`,
        state: { mdFileName: mdFileName }
      }}
    >
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
    </Link>
  );
};

export default BlogItem;
