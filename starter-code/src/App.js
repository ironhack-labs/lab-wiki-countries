import React, { Component } from 'react';
import './App.css';
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:cca3' component={CountryDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;