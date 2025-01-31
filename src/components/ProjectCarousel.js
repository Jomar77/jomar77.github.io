// components/ProjectCarousel.js
import React, { useState } from 'react';

function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      image: './images/pic01.png',
      title: 'New Zealand Map App',
      text: 'Soon to be updated if sisipagin tsaka may pera :D. I hope you enjoyed! *Heavily* based from Denz\'s Project↗.',
      link: 'https://nz-map-app.vercel.app/'
    },
    {image: './images/pic02.jpg',
      title: 'Tunisian House Price prediction',
      text: 'A project that predicts house prices in Tunisia using machine learning models.',
      link: 'http://ec2-52-68-24-183.ap-northeast-1.compute.amazonaws.com/'
    },
    {image: './images/pic05.png',
      title: 'Flight Booking System',
      text: 'A project that simulates a flight booking system made with Jade Language.',
      link: 'https://github.com/Jomar77/JADE-FLIGHT-BOOKING'
    },
    {image: './images/pic06.png',
      title: 'Text Summarization',
      text: 'A project that summarizes text using the BERT approach.',
      link: 'https://github.com/Jomar77/textSummarization'
    }
    
  ];

  const moveBanner = (direction) => {
    if (direction === 'forward') {
      setCurrentProject((prev) => 
        prev === projects.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentProject((prev) => 
        prev === 0 ? projects.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="banner-container">
      <div onClick={() => moveBanner('backward')}><p>&lt;</p></div>
      <div className="banner-content">
        <div className="banner-image">
          <img src={projects[currentProject].image} alt="" />
        </div>
        <div className="title">
          <p>{projects[currentProject].title}</p>
        </div>
        <div className="text">
          <p>{projects[currentProject].text}</p>
        </div>
        <a className="project-link-className" href={projects[currentProject].link}>
          <div className="banner-button">explore</div>
        </a>
      </div>
      <div onClick={() => moveBanner('forward')}><p>&gt;</p></div>
    </section>
  );
}

export default ProjectCarousel;