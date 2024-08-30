import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>I appreciate your interest in my portfolio! Whether you have questions, a project idea, or a potential collaboration, I'd love to connect. Let's work together to create innovative solutions that drive success and elevate your business. I'm eager to apply my web development expertise to make your vision a reality.</p>
      </div>
      <div className='contact-details'>
        <div>
          <p><strong>Name:</strong> Ahmeda Farhin</p>
          <p><strong>Email:</strong> ahmeda.farhin28@gmail.com</p>
          <p><strong>Mobile:</strong> +91 8617048337</p>
          <p><strong>Position:</strong> Frontend Developer at Synechron</p>
          <p><strong>Address:</strong> HSR Layout, Bangalore</p>
        </div>
      </div>
      <p className='thankyou-note'>I am dedicated to delivering high-quality web development services and look forward to the opportunity to collaborate on impactful projects. Let's create something exceptional together!</p>
    </>
  );
};

export default Contact;
