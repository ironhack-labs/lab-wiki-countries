import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Countries from './countries.json';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import Navbar from './components/Navbar.js';
import PersonList from './components/PersonList';
import './App.css';

const NotFound = () => {
  return <h1>404 Not Found 🙃</h1>
}

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        
        <div className="container">
          <div className="row">
          <Switch>
          
        <Route exact path="/" component={CountriesList}/>
      <Route exact path="/countriesFromAPI" component={PersonList}/>
      <Route exact path="/countries/:id" component={CountryDetails}/>
      <Route component={NotFound}/>
        </Switch>
          </div>
        </div>

    </div>
  );
}

export default App;
