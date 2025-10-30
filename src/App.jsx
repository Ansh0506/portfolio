import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx';
import About from './components/About/About.jsx'; // Assuming these are pages for now
import Projects from './components/Projects/Project.jsx';
import Writing from './components/Writing/Writing.jsx';
import Contact from './components/Contact/Contact.jsx';

import './App.css';
import Contribution from './components/Contribution/Contribution.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contributions" element={<Contribution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;