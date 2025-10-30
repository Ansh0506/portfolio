import React, { useState, useRef, useEffect } from 'react'; // Import hooks
import './Skills.css';
import ethereumLogo from '../../assets/ethereum.svg';
import replitLogo from '../../assets/replit.svg';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';

const programmingStack = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Next Js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'GoLang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
  { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'Ethereum', icon: ethereumLogo },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Express Js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
];

const toolsAndTechnologies = [
  { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Mac-OS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Replit', icon: replitLogo },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

const Skills = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  // Ref for the grid container and state to hold the number of columns
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);

  // Effect to calculate columns on mount and resize
  useEffect(() => {
    const calculateColumns = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current.offsetWidth;
        // Get the computed style of a grid item to find its width
        const gridItem = gridRef.current.querySelector('.skill-card');
        if (gridItem) {
          const gridItemWidth = gridItem.offsetWidth;
          const numCols = Math.floor(gridWidth / gridItemWidth);
          setColumns(Math.max(1, numCols)); // Ensure at least 1 column
        }
      }
    };

    calculateColumns(); // Calculate on initial render
    window.addEventListener('resize', calculateColumns); // Recalculate on window resize

    // Cleanup listener
    return () => window.removeEventListener('resize', calculateColumns);
  }, []); // Empty dependency array means this runs once on mount

  // Calculate the number of rows in the first grid to offset the second grid's animation
  const firstGridRows = Math.ceil(programmingStack.length / columns);

  return (
    
    <section id="skills" ref={sectionRef} className={`skills-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <h2 className="skills-heading">
          Professional skillset
        </h2>
        <div className="skills-grid" ref={gridRef}> {/* Attach ref to the first grid */}
          {programmingStack.map((skill, index) => {
            const rowIndex = Math.floor(index / columns);
            return (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: isVisible ? `${rowIndex * 0.15}s` : '0s' }}
              >
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
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
            // Delay the second grid's animation to start after the first one finishes
            const delay = (firstGridRows + rowIndex) * 0.15;
            return (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
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