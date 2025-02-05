import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Bottom_Nav from './Bottom_Nav';
import { useParams } from 'react-router-dom';
import { projectsByYear } from '../data/projects';



function ProjectDetails() {
  const { year } = useParams();
  const filteredProjects = projectsByYear[year] || [];
  return (
    <div id="wrapper">
      <Navigation />
      <div id="main">
        <section id="one" className="tiles">
          {filteredProjects.map((project, index) => (
            <article key={index}>
              <span className="image">
                <img src={project.image} alt={project.title} />
              </span>
              <header className="major">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} className="link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </header>
            </article>
          ))}
        </section>
      </div>
      <Bottom_Nav />
      <Footer />
    </div>
  );  
}


export default ProjectDetails;