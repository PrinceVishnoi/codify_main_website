import React from 'react';
import './ContactForm.css';
import Image from "./Human.jpg.jpg"

function Contact() {
  return (
    <>
    <div className="contact-form-container">
      <div className="contact-left">
      <img src={Image} alt='Img'></img>
      </div>
      <div className="contact-right">
        <form className="contact-form">
        <h2>Contact Us</h2>
        <hr style={{color:'white'}}></hr>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"  required />
          <label htmlFor="phone">Mobile No:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your Phone no" required pattern="[0-9]{10}" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
