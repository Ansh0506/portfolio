import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectHome.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { allProjectData } from "../../data/projects";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

const projectsToShow = allProjectData.slice(0, 3);

const ProjectHome = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.25 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="projects-home" className="project-home-section" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="project-home-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="project-home-grid"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={fadeUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="project-image-container">
                <motion.img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <FaGithub />
                    </a>
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo Link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="view-more-container"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHome;