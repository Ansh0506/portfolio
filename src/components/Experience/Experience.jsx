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
  const experiences = [
    {
      title: "Google Summer of Code 2025 — Siemens (SW360 & FOSSology)",
      role: "Software Developer (Backend & Spring Developer)",
      date: "May 2025 – Present",
      description: [
        "Migrated SW360–FOSSology integration to RESTful OpenAPI v2, enabling 1-step multipart uploads and reducing manual steps by 60%.",
        "Built checksum-driven reuse via SHA-1/MD5 lookup and automated SPDX/CycloneDX report generation, improving scan efficiency by 80%.",
      ],
    },
    {
      title: "Summer of Bitcoin 2025 — Blockcore (Angor Hub)",
      role: "Blockchain Developer (Elements & .NET Developer)",
      date: "May 2025 – Present",
      description: [
        "Developed LiquidService using WASM-based LWK for browser-side confidential wallets with 10+ features (addresses, balances, PSETs, CTs).",
        "Integrated Nostr Protocol for client-side signing and added Taproot & multi-party PSET signing support across testnet/mainnet.",
      ],
    },
  ];

  return (
    <div className="experience-section">
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
        I specialize in <b>backend development</b>, <b>Web3</b>, <b>cloud computing</b>, and <b>distributed systems</b>,
        focusing on building <b>event-driven microservices</b>, <b>Kafka-based architectures</b>, and
        scalable backend solutions powered by <b>AWS</b> and <b>Golang</b>.
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
