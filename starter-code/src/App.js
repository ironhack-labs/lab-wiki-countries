import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

import CountryDetail from "./components/CountryDetail"
import Country from "./components/Country"


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Daily con Rutas</h1>
        </header>
        <main>
        
        </main>
        <Switch>
          <Route path="/" exact component={Country} />
          <Route path="/:id" exact component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
