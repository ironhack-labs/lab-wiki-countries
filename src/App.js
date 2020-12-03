import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import countries from './countries.json';
import './App.css';

class App extends React.Component {
  state = {
    countries: [],
  };

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
                path="/countries/:countryCode"
                component={CountryDetails}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('Mount');
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((countriesFound) => {
        console.log(countriesFound);
        this.setState({ countries: countriesFound.data });
        console.log('StateChanged');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default App;
