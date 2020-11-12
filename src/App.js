import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"

import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Route exact path='/countrieslist' component={CountriesList}/>
        <Route exact path='/countryDetails/:cca3' component={CountryDetails}/>
    </div>
  );
}

export default App;
