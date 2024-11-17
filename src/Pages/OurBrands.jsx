import React from 'react';
import './OurBrands.css'; // Import the CSS file for styling
import career from '../assets/Brand.png'



const OurBrands = () => {
  return (
    <div className="our-brands">
      {/* Large Image Section */}
      <div className="our-brands-image">
        <img src={career} alt="Unilever Brands" />
      </div>

      {/* Text Content Section */}
      <div className="our-brands-content">
        <h1>Our Brands</h1>
        <p>
          Unilever is one of the world’s leading suppliers of fast-moving consumer goods (FMCG), 
          with products that are used by billions of people every day. Our brands are committed 
          to helping people feel good, look good, and get more out of life. With a focus on 
          sustainability and innovation, we are building a brighter future for our consumers.
        </p>
      </div>
    </div>
  );
};

export default OurBrands;
