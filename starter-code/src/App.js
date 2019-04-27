import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar.js";
import CountryList from "./components/CountryList.js";
import CountryDetail from "./components/CountryDetail.js"
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
 
        <Navbar />

        <div className="container">
          <div className="row">

                     
          <CountryList countries={countries} /> 
          <Route exact path="/:id" component={CountryDetail} /> 
          

          </div>
        </div>

      </div>
     
    );
  }
}

export default App;
