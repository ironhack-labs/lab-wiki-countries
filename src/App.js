import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json'
import { Link, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countries} />
          <Switch>
            <Route path="/:countryCode" render={props => {
              return <CountryDetails {...props} countriesList={countries} />
            }} />
          </Switch>
        </div>
      </div>
  );
}
export default App;