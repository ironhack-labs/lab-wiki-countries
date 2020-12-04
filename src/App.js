import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import CountriesList from "./components/CountriesList.js"; 
import CountryDetails from './components/CountryDetails.js';
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <CountriesList /> 
      <Switch>
        <Route path="/countries/:cca3" component={CountryDetails} />
      </Switch>
   
    </div>
  );
}

export default App; 
