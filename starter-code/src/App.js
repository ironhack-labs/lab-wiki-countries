import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import NavBar from "../src/components/NavBar/NavBar";
import Countries from "../src/components/Countries/Countries";
import CountryDetail from "../src/components/CountryDetail/CountryDetail";

import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      country: countries.map(country => country)
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <NavBar />
        </div>
        <div>
          <div class="container">
            <div class="row">
              <div
                class="col-5"
                style={{ "max-height": "90vh", overflow: "scroll" }}
              >
                <div class="list-group">
                  {this.state.country.map(country => (
                    <a class="list-group-item list-group-item-action">
                     <Link to='/'><Countries {...country} /></Link> 
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
