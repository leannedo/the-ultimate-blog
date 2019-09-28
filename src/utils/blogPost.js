import blogs from "../data/blogs";
import codenlearns from "../data/codenlearns";

const joinedBlogs = [...blogs, ...codenlearns];

export const getPostByMarkdownFileName = mdFileName => {
  return joinedBlogs.find(post => mdFileName && post.mdFileName === mdFileName);
};
