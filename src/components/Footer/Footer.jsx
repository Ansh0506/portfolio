import React from 'react';
import './Footer.css';
import { 
  FaGithub, FaLinkedin, FaEnvelope
} from "react-icons/fa6"; // Kept the icons you had

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content container">
        
        {/* Section 1: Designed by */}
        <div className="footer-design">
          <p>Designed and Developed by Ansh kumar</p>
        </div>

        {/* Section 2: Copyright */}
        <div className="footer-copyright">
          <p>Copyright © {currentYear} Ansh kumar</p>
        </div>

        {/* Section 3: Socials */}
        <div className="footer-socials">
          <a href="https://github.com/Ansh0506" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ansh-kumar-704244324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:anshkumar43766@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;