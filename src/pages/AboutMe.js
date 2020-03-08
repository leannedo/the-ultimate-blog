import React from "react";
import "../css/AboutMe/AboutMe.scss";
import aboutMePic from "../assets/about-me.jpg";

const AboutMe = () => {
  return (
    <div className="about-me-index">
      <div className="about-me-pic">
        <img src={aboutMePic} alt="About me" />
      </div>

      <div className="about-me-intro-wrapper">
        <h1>Hi! My name is Leanne.</h1>
        <p>
          To begin with, I'm a girl of extremes. Everything about me stays at
          two ends of a spectrum. Always in conflict with one another. Fierce
          and peaceful. Energetic and hollow.
        </p>
        <p>
          I create this blog to record my journey of overcoming my weaknesses
          and achieving successes, of constant learning and continuous failures.
          You would find in my blog the kind of stories which you can relate,
          reflect, reject, or replicate.
        </p>
        <p>
          I scatter my interests to different topics which fully represent my
          personality: coding and creativity, books and valuable lessons, culture and
          modern technology, gaming and outdoor activities.
        </p>
        <p>
          No matter who you are, I hope that you could find a relatable story and
          'click', and that goes a long way.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
