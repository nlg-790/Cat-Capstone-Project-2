import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FactsPage.css';

const FactsPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(data => {
      setBreeds(data);
    })
    .catch(error => console.error(error));
  }, []);

  const handleRandomFact = () => {
    if (breeds.length > 0) {
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const breed = breeds[randomIndex];
      const fact = `The ${breed.name}, originated from ${breed.origin}, is known for its ${breed.temperament}. It has a life span of ${breed.life_span} years.`;
      setRandomFact(fact);
    }
  };

  return (
    <div className='facts-page'>
      <h1>Cat Facts!</h1>
      <p>Get Ready to Be Surprised by Clicking on Get Random Cat Fact!</p>
      <button onClick={handleRandomFact}>Get Random Cat Fact</button>
      {randomFact && <p>{randomFact}</p>}
      <button><Link to="/">Back to Home</Link></button> 
    </div>
  );
};

export default FactsPage;



