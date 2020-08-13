import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
        
            <CountriesList />
            <Switch>
              <Route exact path="/countries/:cca3" component={CountryDetail} />
            </Switch>
          
        </div>
      </div>
    </div>
  );
}

export default App;
