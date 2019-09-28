import React from "react";
import { Route } from "react-router-dom";

import Home from "../../pagessdfsdf/Home";
import AboutMe from "../../pagessdfsdf/AboutMe";
import Blog from "../../pagessdfsdf/Blog";
import PostContent from "../../pagessdfsdf/PostContent";
import CodeNLearn from "../../pagessdfsdf/CodeNLearn";

const Routes = (
    <Route>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/codenlearn" component={CodeNLearn} />
      <Route path="/blog" component={Blog} />
      <Route path="/post/:slug" component={PostContent} />
    </Route>
  );


export default Routes;
