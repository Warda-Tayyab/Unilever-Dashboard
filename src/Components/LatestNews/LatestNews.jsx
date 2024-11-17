import React from "react";
import "./LatestNews.css";
import buss from '../../assets/business.jpeg';
import flag from '../../assets/flag.jpeg';
import img2 from '../../assets/comm.jpeg';
import img3 from '../../assets/plant.jpeg';
import img4 from '../../assets/wind.jpeg';


const LatestNews = () => {
  const articles = [
    {
      type: "News article",
      title: "COP29: five ways business and government can collaborate on climate",
      date: "8 November 2024",
      description:
        "Ahead of the UN climate conference (COP29), Unilever has outlined five ways governments can drive a faster transition to net zero. Learn why we believe governments and businesses must collaborate to scale up climate action successfully.",
      image: flag, // Replace with actual image link
    },
    {
      type: "News article",
      title: "Unilever boosts investment in packaging R&D to cut virgin plastic",
      date: "8 November 2024",
      image: buss,
    },
    {
      type: "Press release",
      title:
        "Unilever Pakistan’s 'Sustainability Accelerated' Strategy to lead environmental and social impact",
      date: "5 November 2024",
      image: img2,
    },
    {
      type: "News article",
      title:
        "How Unilever’s implementing regenerative agriculture practices across 1 million hectares",
      date: "23 September 2024",
      image: img3,
    },
    {
      type: "News article",
      title:
        "Addressing the climate crisis: a unified approach from business and government",
      date: "23 September 2024",
      image: img4,
    },
  ];

  return (
    <div className="latest-news">
      <h2 className="news-heading">Latest News</h2>
      <div className="news-grid">
        <div className="main-article">
          <img
            src={articles[0].image}
            alt="Main article"
            className="main-image"
          />
          <div className="main-content">
            <span className="article-type">{articles[0].type}</span>
            <h3 className="article-title">{articles[0].title}</h3>
            <p className="article-date">{articles[0].date}</p>
            <p className="article-description">{articles[0].description}</p>
          </div>
        </div>
        <div className="side-articles">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="side-article">
              <img src={article.image} alt="Article" className="side-image" />
              <div>
                <span className="article-type">{article.type}</span>
                <h4 className="side-title">{article.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="news-footer">
        <button className="view-all">View all news  ▶</button>
      </div>
    </div>
  );
};

export default LatestNews;
