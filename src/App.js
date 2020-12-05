import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    country: undefined,
  };

  changeCountry = (id) => {
    this.setState({
      country: countries.filter((country) => country.cca3 === id)[0],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList
              changeCountry={this.changeCountry}
              countries={countries}
            />

            <Route
              exact
              path="/:countryId"
              render={(reactRouterProps) => (
                <CountryDetails
                  {...reactRouterProps}
                  country={this.state.country}
                  changeCountry={this.changeCountry}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
