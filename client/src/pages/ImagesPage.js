import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ImagesPage.css';

const ImagesPage = () => {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=1';
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
    <div className='images-page'>
      <h1>A Cat For You!</h1>
      <p>Click On Random Cat Below and Get a New Random Cat Every Time You Click!</p>
      <button className='random-cat-btn' onClick={fetchImages}>Random Cat</button>
      {images.map(image => (
        <img key={image.id} src={image.url} alt="Cat" width="500" />
      ))}
      <button><Link to="/">Back to Home</Link></button> 
    </div>
  );
};

export default ImagesPage;


