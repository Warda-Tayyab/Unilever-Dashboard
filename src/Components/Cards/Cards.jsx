import React from "react";
import "./Cards.css";

 import image2 from '../../assets/image2.png'
 import career from '../../assets/image3.png'

import Press from '../../assets/press.png'
const Cards = () => {
  return (
    
    <div className="cards-container">
      <div className="card">
        <img
          src={image2} // Replace with the actual image URL for Sustainability
          alt="Sustainability"
          className="card-image"
        />
        <h3 className="card-title"><a href="#sustainability">Sustainability</a></h3>
        <p className="card-description">
          We have been driving an ambitious sustainability agenda for over two decades. Yet, in the face of ever-growing economic, environmental and social challenges, we are evolving our approach.
        </p>
      </div>

      <div className="card">
        <img
          src={career} 
          alt="Careers at Unilever"
          className="card-image"
        />
        <h3 className="card-title"><a href="#careers">Careers at Unilever</a></h3>
        <p className="card-description">
          Visit our dedicated careers site to browse vacancies and find information about what it’s like working for us.
        </p>
      </div>

      <div className="card">
        <img
          src={Press} // Replace with the actual image URL for Press & Media
          alt="Press & media"
          className="card-image"
        />
        <h3 className="card-title"><a href="#press-media">Press & media</a></h3>
        <p className="card-description">
          Press releases and media contact information for journalists and commentators.
        </p>
      </div>
    </div>
  );
};

export default Cards;
