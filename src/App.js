import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div id="root">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <CountriesList></CountriesList>
            <CountryDetail></CountryDetail>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
