import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

export class CountryDetails extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.countries.map((country) => (
            <li key={country.cca3}>
              <Link to={`/country/${country.cca3}`} exact>
                {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountryDetails;
