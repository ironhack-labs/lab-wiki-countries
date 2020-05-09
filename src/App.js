import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
          {/* <Route exact path="/">
            <img src="http://placekitten.com/50/50" alt="cats" />
          </Route> */}
          <Route path="/:country" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
