import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Bottom_Nav from './Bottom_Nav';
import { projectsByYear } from '../data/projects';

const ProjectDetails = () => {
  return (
    <div id="wrapper">
      <Navigation />
      <div id="main">
        <div className="project-details">
          {Object.keys(projectsByYear).map((year) => (
            <section key={year}>
              <h2>{year}</h2>
              <ul>
                {projectsByYear[year].map((project, index) => (
                  <li key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ maxWidth: '100%' }}
                      />
                    )}
                    {project.url && (
                      <p>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <Bottom_Nav />
      <Footer />
    </div>
  );
};

export default ProjectDetails;