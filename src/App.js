import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">

        <div className="col-md-6">
          <CountriesList countries={countries} />
        </div>

        <div className="col-md-6">
          <Switch>
            <Route exact path='/countries/:cca3' component={CountryDetails} />
          </Switch>
        </div>

      </div>
    </div>
  );
}

export default App;
