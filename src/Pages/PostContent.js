import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../css/Blog/PostContent.scss";
import { getPostByMarkdownFileName } from "../utils/blogPost";

const PostContent = ({ location }) => {
  const { state } = location,
    mdFileName = state.mdFileName,
    postData = getPostByMarkdownFileName(mdFileName) || {},
    { title, date } = postData;

  const [markdownText, setMarkDownText] = useState(null);

  const fetchMarkdown = () => {
    try {
      const mdFile = mdFileName && require(`../data/posts/${mdFileName}.md`);

      if (mdFile) {
        fetch(mdFile)
          .then(res => res.text())
          .then(text => setMarkDownText(text));
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(fetchMarkdown);

  return (
    <div className="blog-index-index page-index">
      <h1 className="page-title">{title}</h1>
      <h4 className="post-date">{date}</h4>
      {markdownText && (
        <ReactMarkdown
          source={markdownText}
          escapeHtml={false}
          className="post-content-container"
        />
      )}
    </div>
  );
};

export default PostContent;
