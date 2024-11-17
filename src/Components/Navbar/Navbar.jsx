import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../../assets/logo.jpeg';
import earth from '../../assets/earth.jpeg';
import health from '../../assets/health.jpeg';
import build from '../../assets/build.jpeg';
import write from '../../assets/write.jpeg';
import financial from '../../assets/financial.jpeg';
import people from '../../assets/people.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSustainabilityDropdownOpen, setIsSustainabilityDropdownOpen] = useState(false);
  const [isInvestorDropdownOpen, setIsInvestorDropdownOpen] = useState(false);

  // Refs for dropdowns
  const sustainabilityRef = useRef(null);
  const investorRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSustainabilityDropdown = () => {
    setIsSustainabilityDropdownOpen(!isSustainabilityDropdownOpen);
    // Close Investor Relations dropdown if it's open
    if (isInvestorDropdownOpen) {
      setIsInvestorDropdownOpen(false);
    }
  };

  const toggleInvestorDropdown = () => {
    setIsInvestorDropdownOpen(!isInvestorDropdownOpen);
    // Close Sustainability dropdown if it's open
    if (isSustainabilityDropdownOpen) {
      setIsSustainabilityDropdownOpen(false);
    }
  };

  const closeSustainabilityDropdown = () => {
    setIsSustainabilityDropdownOpen(false);
  };

  const closeInvestorDropdown = () => {
    setIsInvestorDropdownOpen(false);
  };

  // Close dropdowns if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sustainabilityRef.current && !sustainabilityRef.current.contains(event.target)) {
        setIsSustainabilityDropdownOpen(false);
      }
      if (investorRef.current && !investorRef.current.contains(event.target)) {
        setIsInvestorDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={image} alt="Unilever Logo" className="logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/our-company">Our company</Link>
        <Link to="/our-brands">Our brands</Link>

        {/* Sustainability Dropdown */}
        <div className="sustainability-link" onClick={toggleSustainabilityDropdown} ref={sustainabilityRef}>
          Sustainability <span className={`arrow-icon ${isSustainabilityDropdownOpen ? 'up' : ''}`}>&#9662;</span>
          {isSustainabilityDropdownOpen && (
            <div className="sustainability-dropdown">
              <button className="back-button" onClick={closeSustainabilityDropdown}>
                &larr; Back
              </button>
              <div className="sustainability-content">
                <div className="sustainability-item">
                  <img src={earth} alt="Health of the planet" />
                  <p>Improve health of the planet</p>
                </div>
                <div className="sustainability-item">
                  <img src={health} alt="Health and well-being" />
                  <p>Improve people's health & confidence</p>
                </div>
                <div className="sustainability-item">
                  <img src={build} alt="Socially inclusive world" />
                  <p>Contribute to a fairer inclusive world</p>
                </div>
              </div>
              <div className="sustainability-links">
                <Link to="/unilever-pakistan">Unilever For Pakistan</Link>
                <Link to="/policies">Policies</Link>
              </div>
              <button className="view-sustainability">View Sustainability</button>
            </div>
          )}
        </div>

        {/* Investor Relations Dropdown */}
        <div className="investor-relations-link" onClick={toggleInvestorDropdown} ref={investorRef}>
          Investor Relations <span className={`arrow-icon ${isInvestorDropdownOpen ? 'up' : ''}`}>&#9662;</span>
          {isInvestorDropdownOpen && (
            <div className="investor-dropdown">
              <button className="back-button" onClick={closeInvestorDropdown}>
                &larr; Back
              </button>
              <div className="investor-content">
                <div className="investor-item">
                  <img src={people} alt="Investor Topic 1" />
                  <p>Annual Reports</p>
                </div>
                <div className="investor-item">
                  <img src={write} alt="Investor Topic 2" />
                  <p>Financial News</p>
                </div>
                <div className="investor-item">
                  <img src={financial} alt="Investor Topic 3" />
                  <p>Corporate Governance</p>
                </div>
              </div>
              <div className="investor-links">
                <Link to="/financial-reports">Financial Reports</Link>
                <Link to="/investor-policies">Policies</Link>
              </div>
              <button className="view-investor">View Investor Relations</button>
            </div>
          )}
        </div>
        <Link to="/careers">Careers</Link>
        <Link to="/news">News</Link>

      </div>

      <div className="navbar-right">
        <button className="location-button">Unilever Pakistan</button>
        <button className="search-button">
          <span role="img" aria-label="search">🔍</span> Search site
        </button>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
