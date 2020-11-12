import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
     <NavBar />
     <CountriesList countries = {countries} />  
     
    <Route exact path='/:cca3' component={CountryDetails} />
    </div>
  );
}

export default App;
