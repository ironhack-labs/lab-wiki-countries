import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries';

function App() {
  console.log('Countries LIst in App.js', countries);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList Countries={countries} />
          <CountryDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
