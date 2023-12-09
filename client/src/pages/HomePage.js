import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
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
      <h2>The Internet Loves Cats. So Why Not Have Them In One Place?</h2>
    </div>
  );
};

export default HomePage;

