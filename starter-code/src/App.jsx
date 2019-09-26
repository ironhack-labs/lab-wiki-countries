import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1> WikiCountries</h1>
      <div className="left-right">
        <div className="container country-list col-5 right">
          {countries.map(item => (
            <ul className="list-group">
              <li className="list-group-item" key={item.cca2}>
                <Link to={`/country/${item.cca3}`}>
                  {item.cca2} {item.name.common}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="container country-details col-7 left">
          <Switch>
            <Route path="/country/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
