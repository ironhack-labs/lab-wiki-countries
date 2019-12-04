import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";
import {  Route } from "react-router-dom";

import "./App.css";
import CountryDetail from "./components/CountryDetail";
// import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {countries.map((elm, idx) => (
                  <Link
                    className="list-group-item list-group-item-action" key={idx}
                    to={elm.cca3}
                  >
                    {elm.flag} {elm.name.official}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-5">
        <Route path="/:cca3" exact component={CountryDetail}></Route>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
