import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryDetail from "./Components/CountryDetail";
import CountryList from "./Components/CountryList";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <CountryList />
      </div>
      <div>
        <Switch>
          <Route exact path="/country/:cca3" component={CountryDetail} />
        </Switch>
      </div>
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      */}
      </div>
    );
  }
}

export default App;
