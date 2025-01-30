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
    }
    // Add more projects as needed
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