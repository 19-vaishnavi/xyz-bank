import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact XYZ Bank</h2>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </div>
      
    </div>
  );
};

export default ContactPage;
