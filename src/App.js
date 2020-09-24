import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
          <div className="row">
            <CountriesList />
            <Route exact path="/:id" component={CountryDetails} />
            </div>
          </div>
      </div>

  );
}

export default App;
