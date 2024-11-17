import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import { HiOutlineMail } from 'react-icons/hi';
import { BiShareAlt } from 'react-icons/bi';

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="share-section">
        <BiShareAlt className="share-icon" />
        <span>Share this page</span>
        <div className="share-icons">
          <FaFacebookF className="share-icon" />
          <RxTwitterLogo className="share-icon" />
          <FaLinkedinIn className="share-icon" />
          <HiOutlineMail className="share-icon" />
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-section connect-section">
          <h2>Connect with us</h2>
          <p>We're always looking to connect with those who share an interest in a sustainable future.</p>
          <div className="contact-social-icons">
            <FaFacebookF className="contact-icon" />
            <RxTwitterLogo className="contact-icon" />
            <FaInstagram className="contact-icon" />
            <FaLinkedinIn className="contact-icon" />
          </div>
        </div>

        <div className="contact-section contact-info-section">
          <h2>Contact us</h2>
          <p>Get in touch with Unilever PLC and specialist teams in our headquarters, or find contacts around the world.</p>
          <button className="contact-button">
            Contact us ▶
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
