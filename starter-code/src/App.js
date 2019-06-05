import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import CountryDetail from "./components/CountryDetail"
import countries from "./countries.json"


class App extends Component {
    constructor() {
      super()
    this.state =  {
      countries
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>Daily con Rutas</h1>
        </header>
        <main>
          <ul>
            {this.state.countries.map(elm => <li><Link to={`/${elm.cca3}`}>{elm.name.common}</Link></li>)}
          </ul>
        </main>

        <Switch>
          <Route path="/:id" exact component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
