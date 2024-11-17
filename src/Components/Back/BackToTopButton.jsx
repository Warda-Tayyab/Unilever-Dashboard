import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    // Scroll to the top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: visible ? 'block' : 'none', // Only show if scrolled down
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '0%',
        padding: '10px 15px',
        fontSize: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000, // Ensures it stays on top of other content
      }}
    >
     Back To Top 
    </button>
  );
};

export default BackToTopButton;
