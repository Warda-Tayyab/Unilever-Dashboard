import React from 'react';
import './BrandShowcase.css';
import product from '../../assets/product.png'
// Replace with the path to your composite image

const BrandShowcase = () => {
  return (
    <div className="brand-showcase">
      <div className="text-section">
        <h1>
          Our iconic brands <br />
          <span>are on a mission <br /> to <span className="highlight">do good.</span></span>
        </h1>
        <button className="explore-button">
          Explore our brands ▶
        </button>
      </div>
      <div className="image-section">
        <img src={product} alt="Brands" className="composite-image" />
      </div>
    </div>
  );
};

export default BrandShowcase;
