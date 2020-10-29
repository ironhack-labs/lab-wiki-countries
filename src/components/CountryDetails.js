import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import countries from '../countries.json';

export default class CountryDetails extends Component {
  state = {
    countries: countries,
    country: []
  };

  getCountry = () => {
    let id = this.props.match.params.cca3;
    let singleCountry = countries.filter((country) => {
      return country.cca3 == id;
    
    });

    let countryData = {
      name: singleCountry.name.common,
      capital: singleCountry.capital,
      area: singleCountry.area,
      borders: singleCountry.borders
    };

    this.setState({
      country: countryData,
    });
  };

  componentDidMount() {
    console.log('Component did mount');
    this.getCountry();
  }

  componentDidUpdate() {
    console.log('Component did update');
    if (this.state.country.cca3 !== this.props.match.params.cca3) {
      this.getCountry();
    }
  }

  render() {
    console.log(this.state.country);
    return (
      <div>
        <p>{this.state.country.name}</p>
        <p>{this.state.country.capital}</p>
        <p>{this.state.country.area}</p>
        <p>{this.state.country.borders}</p>
      </div>
    );
  }
}
