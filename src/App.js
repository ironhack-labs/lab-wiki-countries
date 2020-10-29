import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

export default class App extends Component {
  state = {
    countries: countries,
  };

  componentDidMount() {
    console.log('Component did mount.');
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="headline" >
            <Navbar />
          </h1>
        </div>
        <div className="body">
          <div>
            {countries.map((country) => {
              return <CountriesList country={country} />;
            })}
          </div>
          <div>
            <Route path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}
