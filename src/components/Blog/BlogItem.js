import React from "react";
import { Link } from "react-router-dom";
import "../../css/Blog/BlogItem.scss";

const BlogItem = ({ id, title, description, date, imageName }) => {
  const getPostSlug = () => {
    const titleFormat = title
        ? title
            .trim()
            .toLowerCase()
            .split(" ")
            .join("-")
        : "",
      idPart = id ? id.substring(0, 7) : "";

    return `${titleFormat}-${idPart}`;
  };

  return (
    <Link
      to={{
        pathname: `/post/${getPostSlug()}`,
        state: { blogId: id }
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
