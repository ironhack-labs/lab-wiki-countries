import React, { Component } from "react";
import "./App.css";
import data from "./countries.json";
import Countries from './components/Countries';

class App extends Component {
  state = {
    countries: [...data]
  };

  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        {/* Render the countries component */}
        <div>
          <Countries countries={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;
