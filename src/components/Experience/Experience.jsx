import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const ExperienceCard = ({ exp, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`experience-card ${isLeft ? "left" : "right"}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="exp-content">
        <h3 className="exp-title">{exp.title}</h3>
        <p className="role">{exp.role}</p>
        <p className="date">{exp.date}</p>
        <ul>
          {exp.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Experience = () => {
  // Replaced previous dummy data with actual projects and roles from the resume
  const experiences = [
    {
      title: "Aegis — 3rd Overall HackByte 4.0 (MLH) ",
      role: "TypeScript, Babel AST, Groq AI, MongoDB ",
      date: "Apr. 2026 ",
      description: [
        "Engineered a zero-trust CLI scanner that parses Abstract Syntax Trees (ASTs) via Babel to detect phantom dependencies and supply-chain threats with sub-500 ms execution time. ",
        "Architected 6 parallel heuristic scanners to detect dangerous API calls (eval, spawn), unauthorized file access, and network exfiltration attempts in under 1 second. ",
        "Leveraged Groq AI for typosquatting classification through a 3-tier risk pipeline (Block / Flag/Allow). Published to npm registry with under 2s total audit overhead. ",
      ],
    },
    {
      title: "Clustify — 1st Place Institute Hackathon [, 20]",
      role: "JavaScript, OAuth 2.0, WebExtensions API, Gmail API ",
      date: "Oct. 2024 ",
      description: [
        "Developed a cross-browser extension (Chrome & Firefox) that batch-processes 3,000+ emails via the Gmail API, reducing manual inbox management time to near zero. ",
        "Designed an AI Auto-Labeler for rule-based email categorization and configured Google OAuth 2.0 for encrypted, scoped access to user data. ",
        "Shipped a preview-before-delete interface with non-blocking async API calls; published to Chrome Web Store and Mozilla Add-ons Store. ",
      ],
    },
  ];

  return (
    <div id="experience" className="experience-section">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <motion.p
        className="experience-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I specialize in <b>full-stack development</b>, <b>security auditing</b>, and <b>AI integration</b>,
        focusing on building <b>zero-trust scanners</b> , <b>cross-browser extensions</b>, and
        scalable software solutions powered by <b>TypeScript</b>, <b>Node.js</b>, and <b>AWS</b>.
      </motion.p>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <ExperienceCard exp={exp} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;