import React, { useState, useEffect } from 'react';
import './SideNav.css';
import { FaHome, FaUser, FaLaptopCode, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Optional: Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects-home', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    // If you don't have an 'about' section yet, you can comment this line out
    { id: 'about', icon: <FaUser />, label: 'About' }, 
    { id: 'projects-home', icon: <FaLaptopCode />, label: 'Projects' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'skills', icon: <FaTools />, label: 'Skills' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  return (
    <div className="side-nav-container">
      {navItems.map((item) => (
        <div 
          key={item.id}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => scrollToSection(item.id)}
        >
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SideNav;