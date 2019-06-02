import React, { Component } from 'react';
import './App.css';
import Home from './scenes/Home'
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Switch>
          <Route exact path="/:cca3" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
