import React from 'react';
import './App.css';
import countries from '../src/countries.json'
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Switch, Route } from "react-router-dom";
import { Component } from 'react';

export default class App extends Component {

  state = {
    countries: countries,
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    })
  }

  render() {
    console.log("hola", countries)
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-6 infoCountry">
            <CountriesList countries={this.state.countries} />
          </div>
          <div className="col-6 infoCountry">
            <Switch>
              <Route
                exact
                path="/:id"
                render={(historyProps) => {
                  return (
                    <CountryDetails
                      {...historyProps}
                      countries={this.state.countries}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

