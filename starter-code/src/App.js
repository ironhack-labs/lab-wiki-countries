import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries.json";

import { Switch, Route, Link } from 'react-router-dom';

import About from './About'
import Default from "./components/Defalut";

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
            {this.state.allCountries.map(yaEsViernes => (
              <Link to={`/about/`+ yaEsViernes.name.common} >
              <CountryDetail 
                name={yaEsViernes.name.common}
                flag={yaEsViernes.cca2.toLowerCase()}
                
              /></Link>
            ))}
          </div>
          <div className="col-6">
          <Switch>
            <Route exact path='/' component={Default} />

            <Route path='/about/:id' component={About} />
          </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
