import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">

<div id="root">
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
      <CountriesList />
      <CountryDetail />
      </div>
      </div>
    </div>
  </div>
  
    </div>
  );
}

export default App;
