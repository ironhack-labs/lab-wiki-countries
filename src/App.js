import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from "./countries.json";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
