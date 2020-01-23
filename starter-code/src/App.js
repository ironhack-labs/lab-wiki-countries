import React from 'react';
import './App.css';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import CountryListItem from './components/CountryListItem';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {
                countries.map((country, idx) => <CountryListItem key={idx} country={country}/>)
              }
            </div>
          </div>
        <Switch>
          <Route exact path="/:countryCode" component={CountryDetails}/>
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
