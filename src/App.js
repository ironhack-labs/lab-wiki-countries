import React, { Component } from 'react';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    countries: undefined,
  };

  componentDidMount() {
    this.setState({ countries: countries });
  }

  render() {
    if (!this.state.countries) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Navbar />

          <CountriesList countries={this.state.countries} />

          <Switch>
            <Route
              exact
              path="/:cca3"
              render={(routeProps) => (
                <CountryDetails
                  {...routeProps}
                  countries={this.state.countries}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
