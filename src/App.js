import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import CountryList from './components/CountriesList/CountryList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import countries from './countries.json'


function App() {

  const [countriesState, setCountries]= useState(countries)

  return (
   <div className="App">
    <Navbar/>

    <div className="container">
    <div className="row">
      <CountryList countries={countriesState} />
      
    </div>
    <div>
    <Switch>
      <Route path="/:ID">
        <CountryDetails countries={countriesState}/>
      </Route>
    </Switch>
      
    </div>

  </div>
   </div>
  );
}

export default App;
