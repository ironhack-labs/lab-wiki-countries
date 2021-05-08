import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/ContriesList';
import CountriesDetails from './components/CountriesDetails';
import axios from 'axios';

//import countries from './countries.json';

import { Route, Switch } from 'react-router';

class App extends React.Component {
  state = {
    countries: [],
  };
  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((result) => {
        this.setState({ ...this.state, countries: [...result.data] });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log('COUNTRIES' + this.countries);
    return (
      <div className="App">
        <NavBar />
        <div>
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
      </div>
    );
  }
}

export default App;
