import React from 'react';
import './About.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import Skills from '../Skills/Skills';
import { NavLink } from 'react-router-dom';
import myPhoto from '../../assets/p1.jpg';
import resumePDF from '../../assets/resume.pdf';  // ✅ import your resume

const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          {/* --- Image --- */}
          <div className={`about-image-container ${isVisible ? 'animate-in' : ''}`}>
            <img src={myPhoto} alt="Ritankar Saha" className="about-photo" />
          </div>

          {/* --- Text --- */}
          <div className={`about-text-container ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="about-heading">About Me</h2>
            <p className="about-paragraph">
              Hello! I'm Ritankar, a passionate engineer driven by the challenge of building robust and scalable systems. My journey into technology began with a deep curiosity for how complex applications work under the hood, leading me to the world of <strong>backend development, cloud infrastructure, and Web3</strong>.
              <br />As a Software Developer at <strong>Google Summer of Code</strong>, I contribute to enhancing the <strong>SW360–FOSSology</strong> integration by implementing features like RESTful OpenAPI v2 migration, checksum-driven file uploads, and customizable scanning. My work also involves enabling multi-format reporting and streamlining complex processes for efficiency.
            </p>

            <h3 className="about-subheading">What Drives Me</h3>
            <p className="about-paragraph">
              My core motivation is intellectual curiosity and the desire to solve real-world puzzles with elegant, efficient code. I thrive on architecting solutions for complex problems, with a strong focus on <strong>distributed systems and event-driven architectures</strong>. I believe that the best products are born from a combination of solid engineering, collaborative spirit, and a relentless drive for improvement.
              <br />As a BTech student in Computer Science and Engineering at IIITDM Jabalpur, I focus on expanding my expertise in <strong>Golang, computer networking, and operating systems</strong>. My passion for backend development and open-source contributions drives me to collaborate on impactful projects and solutions.
            </p>

            <h3 className="about-subheading">Key Achievements</h3>
            <ul className="achievements-list">
              <li>Contributed 60+ PRs to open-source projects like SW360, FOSSology, KubeStellar, KubeBurner, and Podman (Red-Hat Enterprise)</li>
              <li>Earned a Machine Learning Specialization Certificate from Andrew Ng's Stanford Courses.</li>
              <li>Ranked 5th out of 115 at the EIBS (East India Blockchain Summit) for building a Decentralized Healthcare DApp.</li>
              <li>Won 1st place in the Zero-Trust Hackathon with a Terraform-based IaaS solution on AWS.</li>
              <li>Solved 800+ problems on platforms like LeetCode, CodeChef, and Codeforces.</li>
            </ul>

            {/* --- Button Container --- */}
            <div className="about-button-container">
              <a 
                href={resumePDF}  // ✅ use imported path
                download="Ritankar_Saha_Resume.pdf"  // ✅ force download with file name
                className="cta-button primary"
              >
                Resume
              </a>
              <NavLink 
                to="/contact" 
                className="cta-button secondary"
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;
