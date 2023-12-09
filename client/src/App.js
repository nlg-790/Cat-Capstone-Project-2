import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ImagesPage from './pages/ImagesPage';
import BreedsPage from './pages/BreedsPage';
import FactsPage from './pages/FactsPage';
import ScatteredImagesPage from './pages/ScatteredImagesPage';
import ListOfBreedsPage from './pages/ListOfBreedsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="/scatteredimages" element={<ScatteredImagesPage />} />
          <Route path="/listofbreeds" element={<ListOfBreedsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
