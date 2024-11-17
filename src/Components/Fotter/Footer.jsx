import React from 'react';
import './Footer.css';
import image from '../../assets/img.jpg'; // Make sure to update the path to your image

const Footer = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Contact Unilever Pakistan</a>
          <a href="#">FAQS</a>
          <a href="#">Legal</a>
          <a href="#">Cookie Notice</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Sitemap</a>
          <a href="#">اردو</a>
          <a href="#">Accessibility</a>
          <a href="#">Digital Sustainability</a>
          <a href="#">Modern Slavery Statement PDF | 139KB</a>
        </div>
        <div className="footer-bottom">
          <p>Unilever Pakistan</p>
          <p>© Unilever 2024</p>
        </div>
      </div>
      <div className="footer-image">
        <img src={image} alt="Illustration" />
      </div>
     
    </footer>
  );
};

export default Footer;
