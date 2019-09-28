import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import ScrollToTop from "./components/Utils/ScrollToTop";
import routes from "./components/Utils/Routes";
import Header from "./components/Home/Header/Header";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Header />
          {routes}
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
