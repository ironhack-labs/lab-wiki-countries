import React, {Component} from 'react';

import "./App.css";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./components/Countrydetail";
import { Link } from "react-router-dom";
import countries from "./countries.json";


class App extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-primary mb-3">
         <div className="container">
           <a className="navbar-brand" href="/">
             WikiCountries
           </a>
         </div>
       </nav>
        {countries.map((country, idx) => {
          return (
            <div key={idx}>
              <h3>
                <Link to={`/countries/${country.cca3}`}>
                  {country.name.official}{country.flag}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;