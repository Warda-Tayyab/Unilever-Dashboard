import React from 'react';
import './AnnualReport.css';
import pic from '../../assets/1.jpg'
const AnnualReport = () => {
  return (
    <div className="report-container">
      <div className="report-content">
        <h2>Unilever Pakistan Foods Limited - Annual Report 2023</h2>
        <button className="view-details-button">
          View details  ▶  
        </button>
      </div>
      <div className="report-image">
        <img
          src={pic} // Replace with the actual image URL
          alt="Unilever Pakistan Foods Limited - Annual Report 2023"
        />
      </div>
      <div className="key-links">
        <h3>Key links</h3>
        <a href="https://example.com/report.pdf" download>
          Unilever Pakistan Foods Limited - Annual Report 2023 (PDF 13.12 MB)
        </a>
        
      </div>
    </div>
    
  );

 
};

export default AnnualReport;
