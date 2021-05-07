import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/ContriesList';
import CountriesDetails from './components/CountriesDetails';

import countries from './countries.json';

import { Route, Switch } from 'react-router';

class App extends React.Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    this.setState({ ...this.state, countries: countries });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path={`/country-details/:countryCode`}
            component={(routeProps) => {
              return (
                <CountriesDetails
                  {...routeProps}
                  countries={this.state.countries}
                />
              );
            }}
          />
        </Switch>
        <CountriesList countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
