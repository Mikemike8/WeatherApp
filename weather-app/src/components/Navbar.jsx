import React, { useEffect, useState } from 'react';

const Navbar = () => {
 

  return (

    <div>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundImage: 'linear-gradient(45deg, #9ab31c, #352FC8)',  color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Weather App</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Home</a>
          <a href="/about" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>About</a>
          <a href="/contact" style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}>Contact</a>
        </div>
      </nav>

      <p style={{
  color: '#16EFC3', // Dark gray text for readability
  fontSize: '18px',
  lineHeight: '1.6',
  marginTop: '20px',
  width:'45%',
  marginRight:'auto',
  marginLeft:'auto',
  textAlign: 'center', // Center the paragraph
  fontFamily: 'Arial, sans-serif' // Clean and modern font
}}>
  Welcome to the Weather App, your go-to solution for checking the latest weather updates worldwide. 
  With real-time data from trusted sources, you can easily search and view weather information for any location. 
  Whether you're planning your day or tracking a storm, this app offers detailed insights such as temperature, humidity, 
  wind speed, and more. Stay informed and prepared no matter where you are!
</p>

    </div>
    
  );
};

export default Navbar;
