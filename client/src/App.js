import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ImagesPage from './pages/ImagesPage'; 
import BreedsPage from './pages/BreedsPage'; 
import FactsPage from './pages/FactsPage';
import ScatteredImagesPage from './pages/ScatteredImagesPage';
import ListOfBreedsPage from './pages/ListOfBreedsPage';

function App() {
  return (
    <Router>
      <div className="App">
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
        <Routes>
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/scatteredimages" element={<ScatteredImagesPage />} />
          <Route path="/listofbreeds" element={<ListOfBreedsPage />} />
          <Route path="/" element={<h2>Explore Various Cat Breeds and More!</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


