import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <div class="row">
      <CountriesList></CountriesList>

      <Switch>
        <Route exact path='/:country' component={CountryDetails}/>
      </Switch>
    </div>
    </div>
  );
}

export default App;
