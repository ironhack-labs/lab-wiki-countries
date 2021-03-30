// import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';

// import React from 'react';
import NavBar from './component/NavBar';
import CountriesList from './component/CountriesList';
import CountryDetails from './component/CountryDetails';
import countriesJSON from './countries.json';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    this.setState({
      countries: countriesJSON,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div style={{ display: 'flex' }}>
          <CountriesList countries={this.state.countries} />
          <Switch>
            <Route
              path="/countries/:id"
              render={(props) => {
                return (
                  <CountryDetails {...props} countries={this.state.countries} />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
