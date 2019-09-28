import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import ScrollToTop from "./components/UtilsComps/ScrollToTop";
import routes from "./components/UtilsComps/Routes";
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
