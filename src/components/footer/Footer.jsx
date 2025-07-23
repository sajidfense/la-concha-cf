import React from 'react';
import './footer.css';
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="LinkedIn" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="La Cancha CF Logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}

export default Footer;
