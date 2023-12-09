import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListOfBreedsPage.css';

const ListOfBreedsPage = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(data => setBreeds(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className='list-of-breeds-page'>
      <h1>Breed List!</h1>
        <p>Here's a Large List of Various Feline Breeds!</p>
        <button><Link to="/">Back to Home</Link></button> 
        {breeds.map(breed => (
          <div key={breed.id}>
            <h2>{breed.name}</h2>
            <p>{breed.description}</p>
          </div>
        ))}
        <button><Link to="/">Back to Home</Link></button> 
      </div>
    );
};

export default ListOfBreedsPage;
