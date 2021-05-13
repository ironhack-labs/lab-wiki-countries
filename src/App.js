import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <CountriesList />
        <Route exact path="/:countryId" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
