import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <ul className="navigation-bar">
        <Link to="/">
          <li className="navigation-item">Home</li>
        </Link>
        <Link to="/about">
          <li className="navigation-item">About Me</li>
        </Link>
        <Link to="/codenlearn">
          <li className="navigation-item">Code'n Learn</li>
        </Link>
        <Link to="/blog">
          <li className="navigation-item">Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationBar;
