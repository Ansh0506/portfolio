import React from 'react';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import myPhoto from '../../assets/main.jpeg'; 
import resumePDF from '../../assets/resume.pdf'; // <-- Imported your resume here

const Hero = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  // Smooth scroll handler for the "Let's Talk" button
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-container" ref={sectionRef}>
      <div className="hero-content-wrapper">
        <div className={`hero-image-container ${isVisible ? 'animate-in' : ''}`}>
          <img src={myPhoto} alt="Ansh Kumar Singh" className="hero-image" />
        </div>
        
        <div className={`hero-text-container ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="hii">👋 Hii , I'm </h3>
          <h1>Ansh kumar singh</h1>
          <p>Aspiring software engineer with a strong foundation in C++, TypeScript, and modern web frameworks. Proven track record of developing secure supply-chain tools and AI-powered automation to solve complex, real-world problems.</p>
          <p>Full-Stack Developer | B.Tech CSE @ IIIT Jabalpur | 3rd Overall @ HackByte 4.0 (MLH) | Institute Hackathon Winner | Cloud & Security | C++, TS & Node.js</p>

          <div className="social-icons">
            <a href="https://github.com/Ansh0506" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ansh-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:anshkumar43766@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>

          <div className="hero-cta-buttons">
            {/* UPDATED: Download Resume Button */}
            <a 
              href={resumePDF} 
              download="Ansh_Kumar_Singh_Resume.pdf" 
              className="cta-button primary"
            >
              Resume
            </a>
            
            <a 
              href="#contact" 
              onClick={scrollToContact} 
              className="cta-button secondary"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;