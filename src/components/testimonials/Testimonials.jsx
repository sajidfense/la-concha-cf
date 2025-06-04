import React, { useState } from 'react';
import './testimonials.css';
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const prevTestimonial = () => {
    setSelected((prev) => (prev === 0 ? tLength - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setSelected((prev) => (prev === tLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Experience</span>
        <span className='stroke-text'>Our Professional</span>
        <span>Staffing Experience</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: 'var(--blue)' }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
        />

        <div className="arrows">
          <img onClick={prevTestimonial} src={leftArrow} alt="Previous" />
          <img onClick={nextTestimonial} src={rightArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
