import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Countries from './components/CountryDetail/Countries';
import './App.css';
import CountriesData from './countries.json'

function App() {

  const countryByCCA3 = () => {

  }

  return (
    <div className="App">
      <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Countries countriesList={CountriesData} />
          <Switch>
            <Route exact path='/:cca3' render={(props) => <CountryDetail {...props} CountriesData={CountriesData} /> } />
          </Switch>
        </div>
      </div>
    </div>


    </div>
  );
}

export default App;
