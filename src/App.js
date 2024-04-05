import React, { useState, useEffect } from 'react';
import logoImage from './logo.png'; 
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Team from './Team.js';
import Home from './Home.js';
import Project from './Project.js';
import Journey from './Journey.js';
import Encrypt from './Encrypt.js';
import Decrypt from './Decrypt.js';

const styles = {
navbar: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  padding: '1rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky', // Here's the new property
  top: '0', // Stick to the top of the viewport
  zIndex: '1000', // Ensure the navbar is above other content
},
logo: {
  height: '50px', // Set the logo size as needed
  marginRight: '1rem', // Add space between the logo and the nav items
},
navItemsContainer: {
  display: 'flex',
  justifyContent: 'flex-end', // Align nav items to the right <img src={logoImage} style={styles.logo} alt="Company Logo" />
  alignItems: 'center',
},
navItem: {
  margin: '0 1rem',
  color: '#fff',
  textDecoration: 'none',
}
};
const App = () => {

  return (
    <Router>
    <div>
    
      <nav style={styles.navbar}>
        <Link style={styles.navItem} to="/Home">Home</Link>
        <Link style={styles.navItem} to="/Project">Our Project</Link>
        <Link style={styles.navItem} to="/Team">Team</Link>
        <Link style={styles.navItem} to="/Encrypt">Encrypt</Link>
        <Link style={styles.navItem} to="/Decrypt">Decrypt</Link>
        <Link style={styles.navItem} to="#" onClick={(e) => {
        window.location.href = 'mailto:salapat@iu.edu';
         e.preventDefault();}}>Contact Us</Link>
      </nav>
      
      {/* Routes for different pages */}
      <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Project" element={<Project />} /> 
        <Route path="/Team" element={<Team />} />
        <Route path="/Encrypt" element={<Encrypt />} />
        <Route path="/Decrypt" element={<Decrypt />} />
        {/* Define other routes here */}
      </Routes>
    </div>
  </Router>
  );
};

export default App;
