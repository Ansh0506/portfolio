import React from 'react';
import './Hero.css'; // This links to the CSS file we will update
import { NavLink } from 'react-router-dom';
import {FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaXTwitter} from "react-icons/fa6";
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import myPhoto from '../../assets/p1.jpg'; 

const Hero = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="home" className="hero-container" ref={sectionRef}>
      <div className="hero-content-wrapper">
        <div className={`hero-image-container ${isVisible ? 'animate-in' : ''}`}>
          <img src={myPhoto} alt="Ritankar Saha" className="hero-image" />
        </div>
        
        <div className={`hero-text-container ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="hii">👋 Hii , I'm </h3>
          <h1>𝑹𝒊𝒕𝒂𝒏𝒌𝒂𝒓 𝑺𝒂𝒉𝒂</h1>
          <p>an aspiring backend, cloud, and Web3 engineer with a strong interest in distributed systems, event-driven architectures, and DevOps with some Opensource contributions.</p>
          <p>GSoC'25 @SW360 | SoB'25 @Angor | C4GT DMP'25 @SocialCalc | Open-Source Developer | Backend, Cloud, Web3 and ML | 5x Hackathon Winner</p>

        <div className="social-icons">
                  <a href="https://github.com/ritankarsaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a>
                  <a href="https://x.com/ritankarxx" target="_blank" rel="noopener noreferrer" aria-label="X formerly Twitter"><FaXTwitter /></a>
                  <a href="mailto:ritankar.saha786@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>

          <div className="hero-cta-buttons">
            <NavLink to="/writing" className="cta-button primary">
              Read My Blog
            </NavLink>
            <NavLink to="/contact" className="cta-button secondary">
              Let's Talk
            </NavLink>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Hero;