// Home.js
import React, { useState, useEffect } from 'react';
import backgroundVideo from './Toll-plaza.mp4';

const styles = {
  
  header: {
    display: 'flex', // Enable flexbox
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'center', // Center children along the main axis
    alignItems: 'center', // Center children along the cross axis
    height: '100vh', // Make the header take up the full viewport height
    textAlign: 'center', // Ensure text is centered within each child
    color: '#f8f8f8', // Light text color for contrast against dark background
  },
  mainTitle: {
    // ... other mainTitle styles remain unchanged
    color: '#ffffff',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#ffffff',
    fontSize: '1.5rem',
    margin: '1rem 0',// ... other subTitle styles remain unchanged
    visibility: 'visible', // Make sure the subtitle is visible
  },
  connectButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#fff',
    border: '2px solid #333',
    borderRadius: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1',
    objectFit: 'cover',
  },
};

const Home = () => {
    const [typedText, setTypedText] = useState('');
  const fullText = `"Unlock the potential of QR's"`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 50);
  
    // This cleanup function will be called when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>  
    <video autoPlay muted loop style={styles.backgroundVideo}>
    <source src={backgroundVideo} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
    <header style={styles.header}>
      <h1 style={styles.mainTitle}>StealthQR</h1>
      <b><p style={styles.subTitle}>{typedText}</p></b>
      <button style={styles.connectButton}>CONNECT WITH US</button>
    </header>
    </div>
  );
};

export default Home;
