import React from 'react';
import './Contact.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, 
  FaUser, FaPen, FaPaperPlane
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import avatarPlaceholder from '../../assets/p1.jpg'; // <-- Make sure this path is correct

const Contact = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      className="contact-section" 
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subheading">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>

        <div className={`contact-wrapper ${isVisible ? 'animate-in' : ''}`}>
          
          {/* --- Column 1: "Let's Work Together" --- */}
          <div className="contact-info-container">
            <div className="contact-info-header">
              <div className="contact-avatar">
                <img src={avatarPlaceholder} alt="Ritankar Saha" />
              </div>
              <h3>Let's Work Together</h3>
              <p>
                I'm always open to discussing new opportunities, creative ideas,
                or interesting projects.
              </p>
            </div>

            <div className="contact-info-details">
              <div className="info-item">
                <FaEnvelope />
                <span>ritankar.saha786@gmail.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Jabalpur, India</span>
              </div>
            </div>

            <div className="contact-info-socials">
              <a href="https://github.com/ritankarsaha" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://x.com/ritankarxx" target="_blank" rel="noopener noreferrer" aria-label="X formerly Twitter"><FaXTwitter /></a>
            </div>
          </div>

          {/* --- Column 2: Contact Form --- */}
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            <p>
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
              <div className="form-group">
                <FaUser className="form-icon" />
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <FaEnvelope className="form-icon" />
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <FaPen className="form-icon" />
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or just say hello..." required></textarea>
              </div>
              <button type="submit" className="cta-button primary send-button">
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;