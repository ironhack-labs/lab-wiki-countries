import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import countries from "./countries.json";
import Countries from "./Countries";
import CountryDetail from "./CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              <Countries countries={countries} />
            </div>
          </div>
          <div className="col-7">
            <Switch>
              {/* <Route exact path="/" component={Countries} /> */}
              <Route path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
