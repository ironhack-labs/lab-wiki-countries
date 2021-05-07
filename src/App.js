import React from 'react';

import { Route } from 'react-router-dom';
import countries from './countries';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

export default class App extends React.Component {
  state = {
    countries: []
  }
  componentDidMount() {
    this.setState({
      countries: countries
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Route path="/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}