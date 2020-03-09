import React from "react";
import BlogList from "../components/Blog/BlogList";
import BlogBanner from "../components/Blog/BlogBanner";
import codenlearns from "../data/codenlearns";

const CodeNLearn = () => {
  return (
    <div className="codenlearns-index page-index">
      <BlogBanner title="My coding lessons from scratch"/>
      <BlogList blogs={codenlearns} />
    </div>
  );
};

export default CodeNLearn;
