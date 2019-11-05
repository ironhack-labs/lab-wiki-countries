import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import countries from './countries.json'
import BoxName from './components/CountryDetail/BoxName'
import { Switch, Route, Link } from 'react-router-dom';
import ListCountries from './components/CountryDetail/ListCountries'


class App extends Component {

  render(){
    return (
      <div>
      <BoxName >WikiCountries</BoxName>
        <div class="row">
          <ListCountries countries={countries}/>
      <Switch>
        <Route exact path ='/country/:id' render={(props) => <CountryDetail {...props} countries={countries}/>}/>
      </Switch>
        </div>
      </div>
    );
  }
}

export default App;
