import React from 'react';
import './reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="Reason 1" />
        <img src={image2} alt="Reason 2" />
        <img src={image3} alt="Reason 3" />
        <img src={image4} alt="Reason 4" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span> <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="tick" />
            <span>Global Scouting Network — Direct pathways to Spain, Europe, and MLS clubs.</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Professional-Level Training — UEFA Pro Licensed coaches and staff.</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>La Liga Exposure Tours — Play friendly matches vs La Liga Academies.</span> {/* <-- better text */}
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Elite Facilities — Train in Costa Del Sol's premier football facilities.</span> {/* <-- better text */}
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Visa & Relocation Support — Help for international players.</span> {/* <-- better text */}
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Our Partners
        </span>
        <div className="partners">
          <img src={nb} alt="New Balance" />
          <img src={adidas} alt="Adidas" />
          <img src={nike} alt="Nike" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
