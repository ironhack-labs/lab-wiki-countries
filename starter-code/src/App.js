import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import CountryList from "./components/CountryList"
import NavBar from "./components/NavBar"
import countries from "./countries.json"

import { Switch, Route } from 'react-router-dom';
import countryDetail from './components/CountryDetail';

class App extends Component {
  render() {
      // (countries.map(e =>console.log(e) ))
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/list' exact component ={CountryList}/>
          <Route path='/list/:id' exact component={countryDetail} />          
        </Switch>
      </div>
    );
  }
}

export default App;
