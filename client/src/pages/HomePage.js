import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="App-header">
        <h1>The Cat Interface</h1>
      </header>
      <h2>The Internet Loves Cats. So Why Not Have Them In One Place?</h2>
      <div className="links-container">
        <div className="link-item">
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-07/220726-cat-theo-elise-ew-636p-6cd3b0.jpg" alt="One Cat" />
          <Link to="/images" className="link-button">One Cat for You!</Link>
        </div>
        <div className="link-item">
          <img src="https://t3.ftcdn.net/jpg/05/94/98/82/360_F_594988297_E9ZBkFWJt6HuaKAws9W9kCBSvLPWk7PR.jpg" alt="Ten Cats" />
          <Link to="/scatteredimages" className="link-button">A Bunch of Cats For You!</Link>
        </div>
        <div className="link-item">
          <img src="https://i.pinimg.com/originals/69/60/3b/69603bbf3ec82ad39f908b0cf002832a.jpg" alt="All Breeds" />
          <Link to="/listofbreeds" className="link-button">All Breeds Info</Link>
        </div>
        <div className="link-item">
          <img src="https://www.fearfreehappyhomes.com/wp-content/uploads/2021/04/bigstock-Cat-Check-up-8751295.jpg" alt="Specific Breed" />
          <Link to="/breeds" className="link-button">Specific Breed Info</Link>
        </div>
        <div className="link-item">
          <img src="https://blog.idrsolutions.com/app/uploads/2013/11/Smart-Cat-300x300.png" alt="Random Facts" />
          <Link to="/facts" className="link-button">Random Facts</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


