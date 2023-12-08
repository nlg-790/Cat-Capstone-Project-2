// HomePage.js
// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <h1>The Cat Interface</h1>
        <nav>
          <ul>
            <li><Link to="/images">One Cat for You!</Link></li>
            <li><Link to="/scatteredimages">10 Cats For You!</Link></li>
            <li><Link to="/listofbreeds">All Breeds Info</Link></li>
            <li><Link to="/breeds">Specific Breed Info</Link></li>
            <li><Link to="/facts">Random Facts</Link></li>
          </ul>
        </nav>
      </header>
      <h2>Explore Various Cat Breeds and More!</h2>
    </div>
  );
};

export default HomePage;

