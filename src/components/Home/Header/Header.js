import React from "react";
import NavigationBar from "./NavigationBar";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import "../../../css/Home/Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <NavigationBar />
      <SocialLinks />
    </div>
  );
};

export default Header;
