import React from 'react';
import './App.css';
import Countries from './Countries'
import {Switch, Route} from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Countries />
      <Switch>
        <Route exact path="/country/:countryCode" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
