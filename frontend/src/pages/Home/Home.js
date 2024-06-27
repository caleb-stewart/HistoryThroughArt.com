import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home pagecontainer">
      <h1 className="home title">Welcome to Korus' Corner!</h1>
      <p className="home blurb">
        This site is intended to be a learning aid for students exploring the content of the AP Art History curriculum
      </p>
      <a href="/exhibit" className="w3-bar-item w3-button home button">I'm Feeling Lucky</a>
    </div>
  );
}

export default Home;