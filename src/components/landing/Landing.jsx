// LandingPage.jsx
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />

      <section className="hero-section">
        <div className="container">
          <h1>Play Like a Pro on the Costa del Sol</h1>
          <p>Join Costa CF for an elite football experience from September to April. Open to players worldwide seeking exposure, development, and a pathway to pro football in Europe.</p>
          <img src="https://via.placeholder.com/1000x400?text=Team+Training" alt="Team training session" />
        </div>
      </section>

      <section className="pricing-section container">
        <h2>Pricing Options</h2>
        <div className="grid">
          <div className="box">
            <h3>€6,000 <small>(No Accommodation)</small></h3>
            <p>Includes full program access, match play, training kits, analytics, and scout exposure.</p>
          </div>
          <div className="box">
            <h3>€5,500 <small>(Early Payment by July 15)</small></h3>
            <p>Same benefits as above at a discounted rate if booked early.</p>
          </div>
          <div className="box">
            <h3>€9,700 <small>(With Accommodation)</small></h3>
            <p>Includes 8-month shared apartment stay + all program benefits.</p>
          </div>
        </div>
      </section>

      <section className="program-section container">
        <h2>Program Highlights</h2>
        <ul>
          <li>3x team training sessions per week</li>
          <li>1 match per week</li>
          <li>Additional gym, beach, and conditioning sessions</li>
          <li>Access to exclusive Footballr International camps</li>
          <li>Training kits provided</li>
          <li>Matches recorded with Pixellot air camera</li>
          <li>Video analysis with Step Out platform</li>
          <li>Performance reviews (individual + team)</li>
          <li>CSA National B & UEFA certified coaches</li>
          <li>Guest scouts, La Liga players, and coaching staff</li>
          <li>Opportunities for trials via agent/scout network</li>
        </ul>
        <img src="https://via.placeholder.com/800x300?text=Match+Day" alt="Match footage" />
      </section>

      <section className="accommodation-section container">
        <h2>Accommodation: Manilva Green</h2>
        <ul>
          <li>4-star complex with pool, gym, and terrace views</li>
          <li>1 or 2-bedroom shared apartments (player pairing)</li>
          <li>10 min walk to Union Manilva CF pitch</li>
          <li>10 min walk to San Luis de Sabinillas</li>
          <li>15 min to Estepona, 35 min to Marbella</li>
          <li>1 hour from Malaga Airport</li>
          <li>Optional meal plans available</li>
        </ul>
        <img src="https://via.placeholder.com/800x300?text=Manilva+Green+Apartments" alt="Accommodation image" />
      </section>

      <section className="cta container">
        <h2>Ready to join?</h2>
        <p>Spots are limited. Secure your place today and be part of the La Concha CF journey.</p>
        <p><strong>Email:</strong> info@costacf.com</p>
        <p><strong>Whatsapp:</strong> +1(403) 998-8477</p>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;