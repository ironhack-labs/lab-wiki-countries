import React from 'react';
import { Link } from 'react-router-dom';
class CountriesDetails extends React.Component {
  render() {
    const selectedCountry = this.props.match.params.countryCode;
    const filterCountry = this.props.countries.filter((country) => {
      return selectedCountry === country.alpha3Code;
    })[0];

    const borders = filterCountry.borders
      .map((border) => {
        const borderCountry = this.props.countries.filter((country) => {
          return country.alpha3Code === border;
        });

        return borderCountry;
      })
      .flat();
    const countriesNames = borders.map((countryName, index) => {
      return (
        <Link to={`/country-details/${countryName.alpha3Code}`}>
          <li key={index}>{countryName.name}</li>
        </Link>
      );
    });

    return (
      <div className="CountriesDetails">
        <h1>Country Details</h1>
        <h2>{filterCountry.name}</h2>
        <p>Capital: {filterCountry.capital}</p>
        <p>Area: {filterCountry.area} km2</p>
        <p>Borders:</p>
        <ul>{countriesNames}</ul>
      </div>
    );
  }
}

export default CountriesDetails;
