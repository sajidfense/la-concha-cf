import React, { useRef } from 'react';  // ✅ Added useRef import
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {  // ✅ Capitalized component name
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <div>
          <span className='stroke-text'>Ready To</span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Football Career</span>
          <span className='stroke-text'>With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter Your Email Address' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
