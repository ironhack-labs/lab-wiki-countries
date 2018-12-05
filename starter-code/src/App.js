import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CountryDetail from "./components/CountryDetail";
import NavBar from "./components/NavBar/Navbar";

import { Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>WikiCountries!!</h1>
      <NavBar />
        <Switch>
          <Route exact path="/:id" component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
