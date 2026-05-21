import React from 'react';
import './About.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';

const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container about-container">
        
        <h2 className="about-heading">About Me</h2>

        <div className={`about-text-container ${isVisible ? 'animate-in' : ''}`}>
          <p className="about-paragraph">
            Hello! I'm Ansh Kumar Singh, a Computer Science and Engineering undergraduate at IIIT Jabalpur. I specialize in <strong>backend development, security auditing, and modern web frameworks</strong>. My focus is on creating secure, high-performance software—from zero-trust CLI scanners to AI-powered browser automation—that solves complex, real-world problems.
          </p>

          <h3 className="about-subheading">What Drives Me</h3>
          <p className="about-paragraph">
            "I am driven by the challenge of turning complex logic into efficient, scalable systems that eliminate friction and solve real-world problems. Whether I am parsing Abstract Syntax Trees to secure developer supply chains or automating thousands of emails with AI, I love the process of breaking down massive bottlenecks into elegant code. I thrive in that sweet spot where deep technical research meets practical utility—engineering software that isn't just functional, but secure, fast, and resilient from the ground up."
          </p>

          <h3 className="about-subheading">Key Highlights</h3>
          <ul className="achievements-list">
            <li><strong>Major Hackathon Winner:</strong> Placed 3rd Overall at HackByte 4.0 (MLH) out of 120+ teams and won 1st place at the Institute Hackathon.</li>
            <li><strong>Security & AI Automation:</strong> Engineered Aegis, a zero-trust npm supply-chain scanner, and developed Clustify, an AI-powered email categorization extension.</li>
            <li><strong>Competitive Programming:</strong> Secured 12th rank out of 500+ participants in the institute-level Newbie 1.0 programming contest.</li>
            {/* <li><strong>Campus Leadership:</strong> Senior Member & Team Lead for the IIIT Jabalpur Basketball Club, managing strategy, inventory, and mentorship for a 15+ member team.</li> */}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;