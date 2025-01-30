// components/Layout.js
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import ProjectCarousel from './ProjectCarousel';
import ProjectTiles from './Tiles';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Layout() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    // Remove preload class after initial load
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="wrapper">
      <Navigation 
        isMenuVisible={isMenuVisible} 
        setIsMenuVisible={setIsMenuVisible} 
      />
      <Banner />
      <div id="main">
        <ProjectCarousel />
        <ProjectTiles />
        <About />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
