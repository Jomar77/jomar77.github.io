// src/Showcase.js
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project A',
    description: 'Description for project A',
    image: 'images/projectA.png',
    url: 'https://example.com/projectA'
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Description for project B',
    image: 'images/projectB.png',
    url: 'https://example.com/projectB'
  },
  {
    id: 3,
    title: 'Project C',
    description: 'Description for project C',
    image: 'images/projectC.png',
    url: 'https://example.com/projectC'
  },
];

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="showcase-container">
      {/* Left Panel: Projects List */}
      <div className="project-list">
        <ul>
          {projects.map((project) => (
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

      {/* Right Panel: Highlighted Project */}
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