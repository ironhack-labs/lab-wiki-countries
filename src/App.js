import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import countries from './countries.json';
import './App.css';

class App extends Component {
  getBorders = country => {
    const countryBorders = country.borders;
    return countryBorders.map((coun, index) => {
      const border = countries.find(country => country.cca3 === coun);
      return (
        <li key={`${index + 1}-country--listItem`}>
          <Link to={`/country/${border.cca3}`}>{border.name.common}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
            <Route
              exact
              path="/country/:id"
              render={props => (
                <CountriesDetails
                  {...props}
                  countries={countries}
                  getBorders={this.getBorders}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
