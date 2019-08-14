import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import CountriesList from './countries-list'
import CountryDetails from './country-details'

class App extends Component {
  render() {
    return (
    <div className = "App">
        <h3>Countries list</h3>
        <Switch>
          <Route exact path="/" component = {CountriesList}/>
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </div>
    )
  }
}

export default App;
