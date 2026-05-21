// --- Import your local project images here ---
// import myPhoto from '../assets/p1.jpg'; // Example, use your actual filenames
import StysySyncImage from '../assets/StudySync_logo.png';
import AegisImage from '../assets/Aegis_logo.png';
import ClustifyImage from '../assets/Clustify_Logo.png';



// --- Define ALL project data in one place ---
export const allProjectData = [
  {
    title: "StudySync",
    description: "A modern, real-time collaborative study platform that enables students to create virtual study rooms, share educational materials, and communicate seamlessly. Combines PDF sharing capabilities with instant messaging to enhance the collaborative learning experience.",
    tags: ["Node.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
    githubLink: "https://github.com/Ansh0506/StudySync", // Update with your specific repo link
    liveLink: "#", // Update if you have a deployed version
    image: StysySyncImage, // Replace with your actual image variable
  },
  {
    title: "Aegis — Supply-Chain Scanner",
    description: "Engineered a zero-trust CLI scanner that parses Abstract Syntax Trees (ASTs) via Babel to detect phantom dependencies and supply-chain threats with sub-500 ms execution time[cite: 15]. Leveraged Groq AI for typosquatting classification through a 3-tier risk pipeline.",
    tags: ["TypeScript", "Babel AST", "Groq AI", "MongoDB"], // [cite: 14]
    githubLink: "https://github.com/Ansh0506/Aegis", // Update with your specific repo link
    liveLink: "#", 
    image: AegisImage, // Replace with your actual image variable
  },
  {
    title: "Clustify — AI Email Automation",
    description: "Developed a cross-browser extension (Chrome & Firefox) that batch-processes 3,000+ emails via the Gmail API, reducing manual inbox management time to near zero[cite: 21]. Designed an AI Auto-Labeler for rule-based categorization and configured Google OAuth 2.0 for encrypted access.",
    tags: ["JavaScript", "OAuth 2.0", "WebExtensions API", "Gmail API"], // [cite: 19]
    githubLink: "https://github.com/Ansh0506/Clustify", // Update with your specific repo link
    liveLink: "#", 
    image: ClustifyImage, // Replace with your actual image variable
  }
];