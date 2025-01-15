// components/ProjectTiles.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectTiles() {
  const projects = [
    {
      year: '2024',
      image: './images/2024.jfif',
      description: 'Database and software engineering'
    },
    {
      year: '2023',
      image: './images/2023.png',
      description: 'Deployment of websites and data Analytics'
    },
    {
      year: '2022',
      image: './images/2022.png',
      description: 'A mix of web development and data analytics'
    },
    {
      year: '2021',
      image: './images/2021.png',
      description: 'The year where it all began'
    }
  ];

  return (
    <section id="one" className="tiles">
      {projects.map((project) => (
        <article key={project.year}>
          <span className="image">
            <img src={project.image} alt="" />
          </span>
          <header className="major">
            <h3>
              <Link to={`/${project.year}`} className="link">
                {project.year} Projects
              </Link>
            </h3>
            <p>{project.description}</p>
          </header>
        </article>
      ))}
    </section>
  );
}

export default ProjectTiles;