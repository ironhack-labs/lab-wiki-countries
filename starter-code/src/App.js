import React, { Component } from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import CountryDetails from "./Pages/CountryDetails";
import NavBar from "./Components/NavBar";
import Countries from "../src/countries.json";
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className = "container">
          <div className="col-5">
              <div className="list-group">
                {Countries.map(country=>(
                  <Link to = {"/CountryDetails/" + country.cca3} className="list-group-item list-group-item-action" key = {country.cca3}>{country.flag + country.name.official}</Link>
                ))}
              </div>
          </div>
          <div className ="col-7">
            <Route exact path = "/CountryDetails/:CountryCode" component= {CountryDetails} />  
          </div>

        </div>

      </div>
    );
  }
}

export default App;
