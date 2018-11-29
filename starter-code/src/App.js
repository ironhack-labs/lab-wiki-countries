import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from "./components/CountryDetail.js";
import { Switch, Route, Link } from "react-router-dom";
import countryArray from "./countries.json";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countryArray
    }
  }
  render() {
    const { countries } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>WikiCountries</p>
        </header>

        <div class="row">
          <div class="col-5">

            <ul>
              {countries.map(oneCountry => {
                return (
                  <li key={oneCountry.cca3}>
                    <p>
                      <Link to={`${oneCountry.cca3}`}>{oneCountry.flag} {oneCountry.name.common}</Link>
                    </p>

                  </li>
                )
              })}
            </ul>

          </div>
          <div class="col-7">

            <Switch>
              <Route path="/:idUrl" component={CountryDetail}/>
            </Switch>
         
          </div>

        </div>


      </div>
    );
  }
}

export default App;
