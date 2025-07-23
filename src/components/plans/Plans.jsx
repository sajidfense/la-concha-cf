import React from 'react'
import {plansData} from '../../data/plansData'
import './plans.css'
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>Ready to start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i)=>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (  // <-- fix here
                <div className="feature" key={i}>   {/* also change className to singular */}
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
              <div>
                <span>See more benefits</span>
              </div>
              <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans