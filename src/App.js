import React from 'react';
import './App.css';
import countries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route, Switch } from "react-router-dom";

const NotFound = () => {
  return <h1>404 Not Found 🙃</h1>
}

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="list-details-container">
        <CountriesList countries={countries}/>
        
        <Switch>
          <Route exact path="/countries/:cca3" component={CountryDetails}/>
          <Route component={NotFound}/>
        </Switch>
        </div>
    </div>
  );
}

export default App;
