import React from "react";
import { Route } from "react-router-dom";

import Home from "../../pages/Home";
import AboutMe from "../../pages/AboutMe";
import Blog from "../../pages/Blog";
import PostContent from "../../pages/PostContent";
import CodeNLearn from "../../pages/CodeNLearn";

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
