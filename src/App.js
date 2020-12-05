import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

export default class App extends Component {
  state = {
    stateCountries: null, //set this as initial value to avoid "cannot read property name of undefined"
    isLoading: false,
  };
  componentDidMount = () => {
    // this.setState({ stateCountries: [...countries], isLoading: true });

    console.log('This is the moment component did Mount is called');
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((responseBack) => {
        console.log('Response received', responseBack.data);
        // console.log("responseBack:", responseBack);
        this.setState({ stateCountries: responseBack.data, isLoading: true });
      });
  };

  render() {
    console.log('State', this.state.stateCountries);
    console.log('Countries LIst in App.js', countries);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList
              isLoading={this.state.isLoading}
              Countries={this.state.stateCountries}
            />
            <Switch>
              <Route
                exact
                path="/:cca3"
                render={(reactRouterProps) => (
                  <CountryDetails
                    {...reactRouterProps}
                    Countries={this.state.stateCountries}
                    isLoading={this.state.isLoading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
