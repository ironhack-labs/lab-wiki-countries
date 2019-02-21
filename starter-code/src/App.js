import React, { Component } from "react";
import "./App.css";
import CountryList from "./component/CountryList";
import CountryDetail from "./component/CountryDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1>WikiCountries</h1>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <CountryList />
            </div>
            <div className="col-6">
              <Switch>
                <Route exact path="/:cca3" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
