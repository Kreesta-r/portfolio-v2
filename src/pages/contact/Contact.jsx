import React from 'react';
import './contact.css'

function Contact() {
  return (
    <div className="contact" data-aos="fade-in">
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>Let's Discuss your next Project</p>
      </div>
      <form
        action="https://formspree.io/f/xleqdazl"
        method="POST"
        className="contact-form__form" // Added class for styling
      >
        <label className="contact-form__label">
          <p className="contact-label">Your email:</p>
          <input type="email" placeholder="Email" required />
        </label>
        <label className="contact-form__label">
          <p className="contact-label">Your message:</p>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
        </label>
        {/* Your other form fields can go here */}
        <button type="submit" value="Send message" className="contact-btn">
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
