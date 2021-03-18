import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountriesList from "./Components/CountriesList";
import CountryDetails from "./Components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ textAlign: "left", display: "flex", flexDirection:"row"}}>
      <div>
      <CountriesList/>
      </div>
      <div>
        <p>Country Details</p>
      <Switch>
        <Route
          path="/countries/:cca3"
          render={(historyProps) => {
            return <CountryDetails {...historyProps} />;
          }}
        />
      </Switch>
      </div>
      </div>
    </div>

  );
}

export default App;
