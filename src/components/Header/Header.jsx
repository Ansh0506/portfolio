import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaXTwitter, 
  FaHouse, FaUser, FaPenNib, FaCode, FaLaptopCode, FaPaperPlane, FaCodeBranch 
} from "react-icons/fa6";
import './Header.css';
import myPhoto from '../../assets/logo.png'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/"><img src={myPhoto} alt="Ritankar Saha" className="logo-img" />𝑹𝒊𝒕𝒂𝒏𝒌𝒂𝒓 𝑺𝒂𝒉𝒂</NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FaHouse />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FaUser />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/writing">
              <FaPenNib />
              <span>Writing</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <FaCode />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contributions">
              <FaCodeBranch />
              <span>Contribution</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPaperPlane />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a href="https://github.com/ritankarsaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://medium.com/@ritankar.saha786" target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium /></a>
        <a href="https://x.com/ritankarxx" target="_blank" rel="noopener noreferrer" aria-label="X formerly Twitter"><FaXTwitter /></a>
        <a href="mailto:ritankar.saha786@gmail.com" aria-label="Email"><FaEnvelope /></a>
      </div>
    </header>
  );
}

export default Header;