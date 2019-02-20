import React, { Component } from "react";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import CountryList from "./components/CountryList/CountryList";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <Route
            path="/:cca?"
            render={props => {
              const cca = props.match.params.cca;
              return (
                <div className="row">
                  <div
                    className="col-5"
                    style={{ maxHeight: "90vh", overflow: "scroll" }}
                  >
                    <CountryList cca={cca} />
                  </div>

                  <div className="col-7">
                    <CountryDetail cca={cca} />
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
