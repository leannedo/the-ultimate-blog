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
          I'm a right-brained person who have come to fall in love with the wholesome world of coding. 
          Currently I'm learning Java and JavaScript, and I'm working to deliver a 2023 version of myself 
          which is an Android Developer.  
        </p>
        <p>
          With Right Brain Learns Code, I first want to inspire and empower people who do not have a technical
          background but still love and want to learn coding. In this blog, you can find stories  
          of how I have both acquired left-brain skills and sharpen my right-brain ones. 
          Secondly, I want to present Java and JavaScript language from my angle, 
          with a right-brain approach and a left-brain solution.   
        </p>
        <p>
          I believe everyone's experience with coding is unique, and that's why we need more stories
          of people from different backgrounds to fully represent this bizarre yet fantastic world of logic.
        </p>
        
        <p>
          No matter who you are, I hope that you could find a story which you can feel resonate with. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
