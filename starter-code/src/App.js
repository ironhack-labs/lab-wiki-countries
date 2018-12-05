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
                      <Link to="/country-detail">
                        <Countries {...country} />
                      </Link>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="countryDetail">
          <div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead />
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li>
                        <a href="/AND">Andorra</a>
                      </li>
                      <li>
                        <a href="/BEL">Belgium</a>
                      </li>
                      <li>
                        <a href="/DEU">Germany</a>
                      </li>
                      <li>
                        <a href="/ITA">Italy</a>
                      </li>
                      <li>
                        <a href="/LUX">Luxembourg</a>
                      </li>
                      <li>
                        <a href="/MCO">Monaco</a>
                      </li>
                      <li>
                        <a href="/ESP">Spain</a>
                      </li>
                      <li>
                        <a href="/CHE">Switzerland</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
