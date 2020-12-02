import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./navbar/Navbar"
import CountriesList from "./countries/CountriesList"
import CountryDetails from "./countries/CountryDetails"

function App() {
  return (
    <>
      
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />     
          <Switch>
            <Route path="/countries/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>    
      
    </>   
  );
}

export default App;
