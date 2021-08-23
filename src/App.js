import React from 'react';
import axios from 'axios';
import './App.css';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderContent() {
    return (
      <div className="country-list">
        <CountriesList countries={this.state.countries} />
        <Switch>
          <Route
            path="/:cca3"
            render={(routeProps) => {
              const requestedCountry = this.state.countries.find((country) => {
                return country.alpha3Code === routeProps.match.params.cca3;
              });
              return <CountryDetails {...requestedCountry} />;
            }}
            exact
          />
        </Switch>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.countries.length ? this.renderContent() : 'loading'}
      </div>
    );
  }
}

export default App;
