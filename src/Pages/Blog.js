import React from "react";
import BlogList from "../components/Blog/BlogList";
import blogs from "../data/blogs";

const Blog = () => {
  return (
    <div className="blog-index page-index">
      <h2 className="page-title">All blogs</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blog;
