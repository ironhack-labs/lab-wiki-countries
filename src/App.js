import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import countries from './countries.json';
import './App.css';

class App extends Component() {
  
  getName = id => {
    const name = countries.filter(c => {
      if (c.cca3 === id) {
        return c;
      }
    });
    return name.name.common;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Route exact path="/">
              <CountriesList list={countries} />
            </Route>
            <Route
              exact
              path="/countries/:id"
              render={props => <CountriesDetails {...props}/>}
              list={countries}
              getName={this.getName}
            ></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
