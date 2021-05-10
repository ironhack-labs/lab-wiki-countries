import './App.css';
import React, { Component } from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Navbar from './components/Navbar/Navbar';
import json from './countries.json';
import { Route, Switch } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: json,
    };
  }
  componentDidMount() {
    this.setState({ countries: json });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route
                exact
                path="/:cca3"
                render={(props) => (
                  <CountryDetails {...props} countries={this.state.countries} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
