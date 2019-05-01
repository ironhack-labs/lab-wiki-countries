import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries.json"

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: countries,
      currentCountrie: undefined
    };
  }
  render() {
    return (
      <React.Fragment className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="row mt-3">
          <div className="col-5 ml-3">
          {this.state.allCountries.map(yaEsViernes=> <CountryDetail name={yaEsViernes.name.common} />)}
            
          </div>
          <div className="col-6">
            <CountryDetail />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
