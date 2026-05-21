import React, { useState, useRef, useEffect } from 'react';
import './Skills.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';

const programmingStack = [
  { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  // FIXED: Reliable Next.js logo from Wikimedia Commons
  { name: 'Next.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', invert: true },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const toolsAndTechnologies = [
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  // FIXED: Reverted to the reliable IBM logo
  { name: 'IBM Cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', invert: true },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg' },
];

const Skills = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const calculateColumns = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current.offsetWidth;
        const gridItem = gridRef.current.querySelector('.skill-card');
        if (gridItem) {
          const gridItemWidth = gridItem.offsetWidth;
          const numCols = Math.floor(gridWidth / gridItemWidth);
          setColumns(Math.max(1, numCols));
        }
      }
    };

    calculateColumns(); 
    window.addEventListener('resize', calculateColumns); 

    return () => window.removeEventListener('resize', calculateColumns);
  }, []); 

  const firstGridRows = Math.ceil(programmingStack.length / columns);

  return (
    <section id="skills" ref={sectionRef} className={`skills-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2 className="skills-heading">
          Professional skillset
        </h2>
        <div className="skills-grid" ref={gridRef}> 
          {programmingStack.map((skill, index) => {
            const rowIndex = Math.floor(index / columns);
            return (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: isVisible ? `${rowIndex * 0.15}s` : '0s' }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill-icon" 
                  style={skill.invert ? { filter: 'brightness(0) invert(1)' } : {}}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>

        <h2 className="skills-heading">
          Tools & Technologies
        </h2>
        <div className="skills-grid">
          {toolsAndTechnologies.map((skill, index) => {
            const rowIndex = Math.floor(index / columns);
            const delay = (firstGridRows + rowIndex) * 0.15;
            return (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill-icon" 
                  style={skill.invert ? { filter: 'brightness(0) invert(1)' } : {}}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;