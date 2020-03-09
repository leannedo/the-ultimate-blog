import React from "react";
import BlogList from "../components/Blog/BlogList";
import BlogBanner from "../components/Blog/BlogBanner";
import blogs from "../data/blogs";

const Blog = () => {
  return (
    <div className="blog-index page-index">
     <BlogBanner title="Me in a nutshell"/>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Blog;
