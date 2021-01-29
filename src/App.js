import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
          <Route 
            exact path="/:id"
            render={(props) => <CountryDetails {...props} countries={countries} />}  
          />
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
