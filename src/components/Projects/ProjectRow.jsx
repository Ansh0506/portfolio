import React from 'react';
import './ProjectRow.css'; // Styles for this specific row component
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectRow = ({ project, index }) => {
  const [rowRef, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={rowRef}
      className={`project-row ${isReversed ? 'reversed' : ''} ${isVisible ? 'animate-in' : ''}`}
    >
      {/* Column 1: Image */}
      <div className="project-image-col">
        <a href={project.liveLink && project.liveLink !== '#' ? project.liveLink : project.githubLink} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="project-image" />
        </a>
      </div>

      {/* Column 2: Text Content */}
      <div className="project-text-col">
        <h3 className="project-title">{project.title}</h3>

        {/* --- MODIFIED LINKS SECTION --- */}
        <div className="project-links">
          {project.liveLink && project.liveLink !== '#' && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-button" aria-label="Live Demo">
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-button" aria-label="GitHub">
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
        {/* --- END MODIFIED LINKS --- */}

        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;