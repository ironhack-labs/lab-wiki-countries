import React, { Component } from 'react';

import countries from './../countries.json';

class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  loadCountryData() {
    const countryCode = this.props.match.params.countryCode;
    const countryThatMatchesCountryCode = countries.find(
      (item) => item.cca3 === countryCode
    );
    this.setState({
      country: countryThatMatchesCountryCode,
    });
  }

  componentDidMount() {
    this.loadCountryData();
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousProps.match.params.countryCode !==
      this.props.match.params.countryCode
    ) {
      this.loadCountryData();
    }
  }

  render() {
    return (
      <div>
        {this.state.country && (
          <>
            <h1>{this.state.country.name.common}</h1>
            <strong>Capital: </strong>
            <span>{this.state.country.capital[0]}</span>
            <br />
            <strong>Area: </strong>
            <span>{this.state.country.area} km2</span>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetail;