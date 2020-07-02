import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
class App extends Component {
  state = {
    countries: countries,
  };
  displayCountries = () => {
    return this.state.countries.map((eachCountry) => {
      return (
        <CountriesList id={eachCountry.cca3} name={eachCountry.name.common} />
      );
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.displayCountries()}
        <Switch>
          <Route path="/:id" render={(props) => <CountryDetail {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
