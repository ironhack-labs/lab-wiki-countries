import React from 'react';
import './App.css';

import CountryDetail from './components/CountryDetail';



function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
        <CountryDetail />
    </div>
  );
}

export default App;
