import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountryDetails from './components/CountryDetails';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/countryDetails/:id" element={<CountryDetails />} />
    </Routes>
  </Router>
);

reportWebVitals();
