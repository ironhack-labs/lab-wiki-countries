import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';

class App extends Component {

  render() {
    return (
      <Switch>
      <Route exact path='/home' component={Home} />
    </Switch>
);
  }
}

export default App;
