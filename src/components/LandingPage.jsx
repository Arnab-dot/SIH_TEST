import React from 'react';
import './styles.css';

const OceanLandingPage = () => {
  return (
    <div className="ocean-container">
      {/* Navigation pane to be put here*/}
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">Deep Sea</h1>
        </div>
      </nav>

      {/* Here i have implemented bubbling */}
      <div className="bubbles">
        {[...Array(200)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OceanLandingPage;
