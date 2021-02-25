import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

class CountryDetail extends React.Component {
  state = {
    countryId: this.props.match.params.countryId,
  };

  country = (countryId) =>
    countries.find((countryObj) => countryObj.cca3 === this.state.countryId);

  surroundingCountries = (cca3) =>
    countries.find((oneBorder) => oneBorder.cca3 === cca3);

  render() {
    return (
      <div>
        <h1>Country details</h1>
        <p>Capital: {this.country(this.countryId).capital}</p>
        <p>Area: {this.country(this.countryId).area} km2</p>
        <p>Borders:</p>
        <ul>
          {this.country(this.countryId).borders.map((border) => {
            return (
              <li key={this.surroundingCountries(border).cca3}>
                <Link
                  to={`/countries/${this.surroundingCountries(border).cca3}`}
                >
                  {this.surroundingCountries(border).name.official}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;
