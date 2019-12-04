import React from "react";
import CountryDetails from "./components/CountryDetails";
import { Route, Switch } from "react-router-dom";
import OneCountry from "./components/OneCountry"
import "./App.css";

function App() {
  return (
    <div className="App">

    
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">WikiCountries</span>
      </nav>

 
        <CountryDetails />
   
      
      <Switch>
        <Route path="/:cca3" component={OneCountry} />
      </Switch>
     


    </div>
  );
}

export default App;
