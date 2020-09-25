import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="navbar navbar-dark bg-primary mb-3">
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {<Route exact path="/:id" component={CountryDetails} />}
        </div>
      </div>
    </div>
  );
}

export default App;
