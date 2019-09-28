import React from "react";

const PostContent = ({ location }) => {
  const {
    state: { blogId }
  } = location;

  console.log(blogId);

  return (
    <div className="blog-index-index page-index">
      <h2 className="page-title">Hello world</h2>
    </div>
  );
};

export default PostContent;
