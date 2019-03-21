import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from "./components/CountryDetail"

import { Switch, Route } from 'react-router-dom';
import  ShowCountries from "./components/ShowCountries"

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div className="row">
        
        <ShowCountries className="col-5"/>
        
  <div className="col-7">
  <Switch>



<Route exact path="/country-details/:cca3" component={CountryDetail}/>

</Switch>
</div>
</div>
        
      </div>
    );
  }
}

export default App;
