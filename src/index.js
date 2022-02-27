import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"; 

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/countries" element={<CountriesList />} />
      <Route path="/:id" element={<CountryDetails />} />
    </Routes>
    </Router>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();