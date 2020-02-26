import React, { Component } from "react";
import './App.css';
import countries from "./countries.json";
import Country from "./CountryDetail";
import { Route, Link, Switch } from "react-router-dom";

let arrCountries = [...countries]

class App extends Component {

  state = { arrCountries };
  render() {
    return (
      <div className="App" >
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5 divList">
                  <div className="list-group">
                    {this.state.arrCountries.map(country => (
                      <Link
                        className="list-group-item list-group-item-action"
                        key={country.cca3}
                      >{country.flag} {country.name.official}
                      </Link>))}
                  </div>
                </div>
                <div className="col-7">
                  <Switch>
                    <Route path="/cca3" component={arrCountries} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default App;
