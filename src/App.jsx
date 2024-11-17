import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Careers from './Pages/Careers';
import OurBrands from './Pages/OurBrands';
import OurCompany from './Pages/OurCompany';
import News from './Pages/News';
import Footer from './Components/Fotter/Footer';
import Contact from './Components/Contact/Contact';

import BackToTopButton from './Components/Back/BackToTopButton';
import Page from './Pages/Page';


const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={< Page/>} />
        <Route path="/our-company" element={<Page />} />
        <Route path="/our-brands" element={<OurBrands />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
   <BackToTopButton/>
      <Contact/>
    
      <Footer/>
    </>
  );
};

export default App;
