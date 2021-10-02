import React from 'react';
import './App.css';
import CountriesList from './CountriesList';
import Nav from './Navbar';
import countries from './countries.json';
import CountryDetail from './CountryDetails';
function App() {
  return (
    <div>
      <Nav />
      <div className="main">
        <CountriesList countries={countries} />
      </div>
    </div>
  );
}

export default App;
