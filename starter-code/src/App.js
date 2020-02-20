import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import countriesAll from "./countries.json";
import { Route, Switch, Link } from "react-router-dom";
import CountryDetail from "./Components/CountryDetComp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesAll
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              Wiki Countries
            </a>
          </div>
        </nav>
        <div className="mainDiv">
          <div className="list-group listGroup">
            {this.state.countriesAll.map((eachCountry, index) => {
              return (
                <Link
                  key={index}
                  to={`/${eachCountry.cca3}`}
                  className="list-group-item list-group-item-action"
                >
                  {eachCountry.flag}
                  {eachCountry.name.common}
                </Link>
              );
            })}
          </div>
          <Switch>
            <Route exact path="/:id" component={CountryDetail}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
