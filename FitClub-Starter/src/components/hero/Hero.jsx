import React from 'react';
import Header from '../header/Header';
import './hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768;

  return (
    <div className="hero" id="home"> {/* ✅ Fixed */}
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        
        {/* The Best Ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>The best football club in the city</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Start </span>
            <span>Your</span>
          </div>
          <div>
            <span>Pro Journey</span>
          </div>
          <div>
            <span>
            Elite Football Development | Scouting Pathways | Play Against La Liga Clubs
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>+50</span>
            <span>Players signed</span> {/* ✅ Fix */}
          </div>
          <div>
            <span>30+</span>
            <span>Pro Trial Arranged</span> {/* ✅ Fix */}
          </div>
          <div>
            <span>5+</span>
            <span>PRO FIFA Licensed Coaches</span> {/* (or Fitness, depending) */}
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button> {/* ✅ Fix */}
          <button className="btn">Learn More</button> {/* ✅ Fix */}
        </div>
      </div>

      <div className="right-h">
        <button>
        <Link to="/program" className="btn">
        Join Now
      </Link>
        </button>


        <motion.div 
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart Rate" />
          <span>Heart Rate</span> {/* ✅ Fix */}
          <span>180 BPM</span>
        </motion.div>

        {/* Hero Image */}
        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img 
          src={hero_image_back} 
          alt="Hero Back" 
          className="hero-image"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* Calories */}
        {/* <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="Calories Burned" />
          <span>Calories Burned</span>
          <span>1220 kcal</span>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
