// src/Showcase.js
import React, { useState } from 'react';
import { projectsByYear } from '../../data/projects';

const allProjects = Object.values(projectsByYear).flat().map((project, index) => ({
  ...project,
  id: project.id || index + 1,
}));

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  return (
    <div className="showcase-container">
      <div className="project-list">
        <ul>
          {allProjects.map((project) => (
            <li
              key={project.id}
              className={`project-item ${project.id === selectedProject.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-detail">
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.description}</p>
        {selectedProject.image && (
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            style={{ maxWidth: '100%' }}
          />
        )}
        {selectedProject.url && (
          <p>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Showcase;