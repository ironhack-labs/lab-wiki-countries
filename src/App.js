import React, { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './CountriesList';
import Nav from './Navbar';
import countries from './countries.json';

function App() {
  //const [countries, setCountries] = useState([]);
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
