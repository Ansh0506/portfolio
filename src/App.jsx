import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav/SideNav.jsx';
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home.jsx';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <SideNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;