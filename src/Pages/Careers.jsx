import React from 'react';
import './Careers.css'; // Import the CSS file for styling

const Careers = () => {
  return (
    <div className="careers-page">
    

      {/* Text Content Section */}
      <div className="careers-content">
        <h1>Careers at Unilever</h1>
        <p>
          Join our diverse team of innovators at Unilever, where we focus on making a positive impact on the world and fostering a culture of inclusivity and sustainability. Discover how you can contribute to building a brighter future with us.
        </p>
        
        <div className="careers-list">
          <h2>Current Job Openings</h2>
          
          <div className="career-item">
            <h3>Marketing Manager</h3>
            <p>
              Unilever is looking for a dynamic Marketing Manager to lead our brand strategy and product marketing efforts. Join our team to innovate and build world-class products.
            </p>
            <a href="/careers/marketing-manager">Apply Now</a>
          </div>
          
          <div className="career-item">
            <h3>Operations Supervisor</h3>
            <p>
              We are seeking an experienced Operations Supervisor to oversee our manufacturing operations. Help us drive efficiency and ensure our high-quality products reach the market.
            </p>
            <a href="/careers/operations-supervisor">Apply Now</a>
          </div>

          <div className="career-item">
            <h3>Sustainability Analyst</h3>
            <p>
              Be a part of Unilever's mission to drive sustainability! We are looking for a Sustainability Analyst to help us measure and improve our environmental impact.
            </p>
            <a href="/careers/sustainability-analyst">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
