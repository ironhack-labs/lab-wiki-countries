import React from 'react';
import Navbar from './components/Navbar';
import Countries from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <div className="app_container">
          <div className="countries_container">
            <Route exact path="/" component={Countries} />
          </div>
          <div className="country_details_container">
            <Route exact path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
