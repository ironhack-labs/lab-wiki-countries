import React, { Component } from 'react';
import './App.css';
import  { Switch, Route } from 'react-router-dom';
import CountriesList from "./components/countryList"

class App extends Component {
  render() {
    return (

      <div className="App">
         <div className="list-group">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      </div>

      <Switch>
        <Route exact path = "/" component={CountriesList}>
        </Route>
      </Switch>

      </div>
    );
  }
}

export default App;
