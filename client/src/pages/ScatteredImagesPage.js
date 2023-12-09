import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ScatteredImagesPage.css';

const ScatteredImagesPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchRandomImages();
  }, []);

  const fetchRandomImages = () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'; 
    fetch(url, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(error => console.error(error));
  };

  return (
    <div className='scattered-images-page'>
      <h1>10 Cats for You Because You're Awesome! </h1>
      <div className='images-container'>
        {images.map(image => (
          <img key={image.id} src={image.url} alt="Cat" />
        ))}
      </div>
      <button><Link to="/">Back to Home</Link></button> 
    </div>
  );
};

export default ScatteredImagesPage;
