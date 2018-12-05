import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries.js"
import CountryDetails from "./components/CountryDetails/CountryDetails.js"

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-primary">
          <Link to="/"><h1 style={{ textDecoration: "none", color: "white" }}>Wiki Countries</h1></Link>
        </nav>
        
        <AllCountries></AllCountries>

        <Switch>
          <Route exact path='/:id' component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
