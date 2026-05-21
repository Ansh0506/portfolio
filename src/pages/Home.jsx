import React from 'react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import ProjectHome from '../components/Projects/projectHome';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectHome />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;