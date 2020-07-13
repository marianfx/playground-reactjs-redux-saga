import React from 'react';

// Stateless Functional Component (component that only renders stuff based on props)
const StateBanner = ({ appName }) => {
    return (
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">
            {appName.toLowerCase()}
          </h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    );
  };
  
  export default StateBanner;