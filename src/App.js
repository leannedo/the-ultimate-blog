import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Home/Header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import CodeNLearn from "./pages/CodeNLearn";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/codenlearn" component={CodeNLearn} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
};

export default App;
