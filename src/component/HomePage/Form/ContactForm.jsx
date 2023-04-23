import React from 'react';
import './ContactForm.css'
// import { MDBBtn } from 'mdb-react-ui-kit';
export default function ContactForm() {
  return (
    <>
       <div className="container-fluid" style={{height:'550px'}}>
      <div className="row">
        {/* Side Section */}
        {/* Side Section */}
        <div className="col-12" style={{height:'550px',backgroundColor:'black',borderRadius:'0px 10px 10px 0px',textAlign:'center'}}>
        <h3 style={{color:'#fff', fontSize:'25px', padding:'20px 0px'}}>Contact Us</h3>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />

          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>

          <button type="submit" className="new-button">
            <span>Get in touch now</span>
            <div className="icon-container">
              <i className="fas fa-paper-plane"></i>
            </div>
          </button>
        </form>
        </div>

</div>
      </div>
    </div>
    </>
   
  );
}
