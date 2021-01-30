import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Switch>
              <Route path="/:countryCode" render={ props => {
                return  <CountryDetails {...props} countries={countries}/>  
              }}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
