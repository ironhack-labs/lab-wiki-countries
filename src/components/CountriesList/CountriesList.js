import React from 'react';

import './CountriesList.css';

import countries from '../../countries.json';

import CountryDetails from '../CountryDetails/CountryDetails';

export default class CountriesList extends React.Component {
  state = {
    countries: countries,
  };

  render() {
    return <h1>I am a Countries List</h1>;
  }
}
