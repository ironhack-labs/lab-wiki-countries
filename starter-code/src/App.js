import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import { Switch, Route } from "react-router-dom";

class App extends Component {





  render() {
    return (
      
      <div class="row">
        <div class="col-5"><CountryList/></div>
        <div class="col-7">
        <Switch>
          <Route exact path='/:cca3' component={CountryDetail} />
        </Switch></div>
      </div>
      
     
    );
  }
}

export default App;
