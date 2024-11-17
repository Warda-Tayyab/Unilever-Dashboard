import React from 'react';
import './News.css'; // Import the CSS file for styling
import career from '../assets/nim.png'
import'./OurBrands.css'
const News = () => {
  return (
    <div className="news-page">
       {/* Large Image Section */}
       <div className="our-brands-image">
        <img src={career} alt="Unilever Brands" />
      </div>

      {/* Text Content Section */}
      <div className="news-content">
        <h1>Unilever News</h1>
        <p>
          Stay up-to-date with the latest news and updates from Unilever. Our brands and innovations are always evolving to better serve our consumers and make a positive impact on society.
        </p>
        
        <div className="news-articles">
          <article>
            <h2>Unilever Expands Sustainability Efforts</h2>
            <p>
              Unilever is dedicated to reducing its carbon footprint across all its operations. Read about our latest efforts towards sustainability...
            </p>
            <a href="/news/unilever-sustainability">Read More</a>
          </article>
          
          <article>
            <h2>Unilever Introduces New Product Line</h2>
            <p>
              Unilever has launched a new range of products aimed at promoting healthier lifestyles. Learn more about our new product offerings...
            </p>
            <a href="/news/unilever-new-products">Read More</a>
          </article>
          
          <article>
            <h2>Unilever Awards and Recognition</h2>
            <p>
              Unilever has been recognized globally for its efforts in sustainability and innovation. Find out more about our latest awards...
            </p>
            <a href="/news/unilever-awards">Read More</a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;
