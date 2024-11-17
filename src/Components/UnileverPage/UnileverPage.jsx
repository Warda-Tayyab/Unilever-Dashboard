import React from "react";
import "./UnileverPage.css";
import unilever from '../../assets/image4.png'
import uni from '../../assets/liver.jpeg'

function UnileverPage() {
  return (
    <div className="unilever-container">
      <header className="header-section">
        <div className="header-content">
          <h1>Welcome to Unilever Pakistan</h1>
        </div>
        <div className="header-image">
          <img
            src={uni} // Replace with actual image URL
            alt="Unilever Logo Landscape"
          />
        </div>
      </header>
      
      <section className="info-section">
        <div className="info-item">
          <p className="info-title">75 years</p>
          <p>of Sustainable Business in Pakistan</p>
        </div>
        <div className="info-item">
          <p className="info-title">Over 30</p>
          <p>brands in our market</p>
        </div>
        <div className="info-item">
          <p className="info-title">#1</p>
          <p>Employer of Choice for the past 13 years</p>
        </div>
        <div className="info-item">
          <p className="info-title">In 90%</p>
          <p>of Pakistani households</p>
        </div>
      </section>

      <div className="cta-section">
        <button className="cta-button">Find out more about Our Company ▶</button>
      </div>

      <footer className="footer">
        <button className="back-to-top"> </button>
      </footer>
    </div>
  );
}

export default UnileverPage;
