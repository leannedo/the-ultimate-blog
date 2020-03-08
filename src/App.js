import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import ScrollToTop from "./components/UtilsComps/ScrollToTop";
import routes from "./components/UtilsComps/Routes";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
          <div className="app">
            {routes}
          </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
