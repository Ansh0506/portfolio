import React from 'react';

import Hero from '../components/Hero/Hero';
import ProjectHome from '../components/Projects/projectHome';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <ProjectHome />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;