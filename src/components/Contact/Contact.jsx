import React from 'react';
import './Contact.css';
import { useIntersectionObserver } from '../../Hooks/useIntersectionObserver';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, 
  FaUser, FaPen, FaPaperPlane
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import avatarPlaceholder from '../../assets/logo.png';

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
          
          {/* --- Column 1: Info --- */}
          <div className="contact-info-container">
            <div className="contact-info-header">
              <div className="contact-avatar">
                <img src={avatarPlaceholder} alt="Ansh Kumar Singh" />
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
                <span>anshkumar43766@gmail.com</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Jabalpur, India</span>
              </div>
            </div>

            <div className="contact-info-socials">
              <a href="https://github.com/Ansh0506" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ansh-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:anshkumar43766@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>

          {/* --- Column 2: Form --- */}
          <div className="contact-form-container">
            <h3 className="form-title">SEND ME A MESSAGE</h3>
            <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
              <div className="form-group">
                <FaUser className="form-icon" />
                <input type="text" id="name" name="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <FaEnvelope className="form-icon" />
                <input type="email" id="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <FaPen className="form-icon" />
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group message-group">
                <FaPen className="form-icon textarea-icon" />
                <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="send-button">
                <span>Send Message &rarr;</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;