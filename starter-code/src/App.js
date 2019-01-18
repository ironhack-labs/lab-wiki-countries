import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CountyList } from "./components/CountyList";
import data from "./countries.json";
import { Switch, Route } from "react-router-dom";
import { CountryDetail } from "./pages/CountryDetail";
import { Home } from "./pages/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountyList countryData={this.state.data} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/:cca3"
                render={props => (
                  <CountryDetail {...props} countryData={this.state.data} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
