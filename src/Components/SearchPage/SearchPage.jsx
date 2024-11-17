import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons
import "./SearchPage.css";
import image from '../../assets/logo.jpeg';


function SearchPage() {
  return (
    <div className="search-page">
     

      {/* Main Content Section */}
      <main className="search-main-content">
        <div className="search-content-center">
          <img
            src={image}  // Replace with actual logo path
            alt="Jama Punji"
            className="jama-punji-logo"
          />
          <button className="jama-punji-button">Jama Punji</button>
        </div>
        
        {/* Search Section */}
        <div className="search-bar-container">
          <h2 className="search-heading">Search Unilever Pakistan</h2>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Enter keywords to search"
              className="search-input"
            />
            <button className="search-button">
              <FaSearch className="search-icon" /> {/* Using the search icon here */}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;
