import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import React, { Component } from 'react';
import Countries from './countries.json';

export default class App extends Component {
  state = {
    countries: Countries,
  };

  // conponentDidMount = () => {
  //   this.setState( {
  //  countries:
  //   }
  //   )
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <CountriesList countries={this.state.countries} />
        <Switch>
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;

{
  /* <CountriesList />
     <Switch
      <Route exact path="/CountryDetails/:id" render={(reactRouterProps)=>(<CountryDetails {...reactRouterProps} />) }
      component={CountryDetails} /> } */
}
