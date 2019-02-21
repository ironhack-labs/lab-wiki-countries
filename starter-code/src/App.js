import React, { Component } from 'react';
import './App.css';
import ListCountry from './ListCountry/ListCountry'
import { Switch, Route } from 'react-router-dom';
import DetailCountry from './DetailCountry/DetailCountry';


class App extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-primary mb-3">
        
          <a className="navbar-brand" href="/">WikiCountries</a>
        
      </nav>
      <div className="container">
     
      <div className="row">

        <ListCountry/>
        
        <Switch>
          <Route exact path={"/:cca3"} component={DetailCountry}/>
        </Switch>
        </div>
        </div>

      </div>
    );
  }
}

export default App;
