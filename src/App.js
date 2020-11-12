import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { Route, Switch } from 'react-router-dom';
import countries from "./countries.json";

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Switch>
            <Route exact path="/:cca3" component={CountriesDetails} /> 
          </Switch>
        {/* <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route exact path="/:cca3" component={CountriesDetails} />
        </Switch> */}
        </div>
      </div>
    </div>
  );
  }
}



export default App;
