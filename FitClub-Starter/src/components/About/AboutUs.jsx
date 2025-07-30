import React from 'react';
import './aboutus.css';
import aboutus from "../assets/about-us.jpg";
const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us-text">
        <h2 className="section-title stroke-text">ABOUT COSTA CF</h2>
        <p>
          COSTA CF is more than a football club — we are a community committed to shaping the next generation of talent.
          Nestled near the iconic La Concha Mountain in Marbella, we blend tradition, innovation, and passion to build champions both on and off the field.
        </p>
        <p>
          Our programs cater to all levels, from beginners to elite players aiming for professional careers.
          At COSTA CF, we believe that football is not just a game — it’s a lifestyle.
        </p>
      </div>
      <div className="about-us-image">
        <img src={aboutus} alt="COSTA CF Team" />
      </div>
    </div>
  );
};

export default AboutUs;
