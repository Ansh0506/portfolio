import React from 'react';
import './Footer.css';
import { 
  FaGithub, FaLinkedin, FaMedium, FaXTwitter 
} from "react-icons/fa6"; // Kept the icons you had

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content container">
        
        {/* Section 1: Designed by */}
        <div className="footer-design">
          <p>Designed and Developed by Ritankar Saha</p>
        </div>

        {/* Section 2: Copyright */}
        <div className="footer-copyright">
          <p>Copyright © {currentYear} Ritankar saha</p>
        </div>

        {/* Section 3: Socials */}
        <div className="footer-socials">
          <a href="https://github.com/ritankarsaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a>
          <a href="https://x.com/ritankarxx" target="_blank" rel="noopener noreferrer" aria-label="X formerly Twitter"><FaXTwitter /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;