import logo from './logo.svg';
import './App.css';

import React from 'react';

import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import countries from './countries.json';

class App extends React.Component {
  state = {
    countries: {},
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <CountriesList countries={countries} />
            </div>
            <div className="col-8">
              <Route
                exact
                path="/countries/:cca3"
                render={(routeProps) => (
                  <CountryDetails {...routeProps} countries={countries} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
