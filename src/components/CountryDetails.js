import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

export default class CountryDetails extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.countryName
    );

    if (country) {
      this.setState({ ...country, show: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.countryName
    );

    if (prevState.cca3 !== country.cca3) {
      this.setState({ ...country, show: true });
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.show && (
          <div>
            <h1>{this.state.name.common}</h1>
            <p>{this.state.capital[0]}</p>
            <p>{this.state.area}km²</p>
            {this.state.borders.map((border, i) => (
              <div key={i}>
                <Link to={`/countries/${border}`}>
                  <span>{border}</span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
