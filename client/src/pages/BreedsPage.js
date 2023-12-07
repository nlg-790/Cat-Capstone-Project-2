import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BreedsPage = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

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

  const handleSearch = () => {
    const filtered = breeds.filter(breed =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBreeds(filtered);
    setHasSearched(true);
  };

  return (
    <div>
      <h1>Breed Search!</h1>
      <p>Type a Breed Below to Learn All About That Breed!</p>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for cat breeds"
      />
      <button onClick={handleSearch}>Search</button>
      {hasSearched && filteredBreeds && filteredBreeds.map(breed => (
        <div key={breed.id}>
          <h2>{breed.name}</h2>
          <p><strong>Origin:</strong> {breed.origin}</p>
          <p><strong>Life Span:</strong> {breed.life_span} years</p>
          <p><strong>Weight:</strong> {breed.weight.metric} kg</p>
          <p><strong>Temperament:</strong> {breed.temperament}</p>
          <p><strong>Description:</strong> {breed.description}</p>
          <p><strong>Wikipedia:</strong> <a href={breed.wikipedia_url} target="_blank" rel="noopener noreferrer">Learn more</a></p>
          {breed.image && <img src={breed.image.url} alt={breed.name} width="200" />}
        </div>
      ))}
      <button><Link to="/">Back to Home</Link></button> 
    </div>
  );
};

export default BreedsPage;




