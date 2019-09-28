import React from "react";
import BlogItem from "./BlogItem";
import "../../css/Blog/BlogList.scss";

const BlogList = ({ blogs }) => {
  const renderblogList = blogs => {
    blogs.sort(function(a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });

    return blogs.map((blog, index) => <BlogItem key={index} {...blog} />);
  };

  return (
    <div className="blog-list-container">{blogs && renderblogList(blogs)}</div>
  );
};

export default BlogList;
