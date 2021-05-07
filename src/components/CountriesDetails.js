import React from 'react';
import { Link } from 'react-router-dom';
class CountriesDetails extends React.Component {
  render() {
    const selectedCountry = this.props.match.params.countryCode;
    const filterCountry = this.props.countries.filter((country) => {
      return selectedCountry === country.cca3;
    })[0];

    const borders = filterCountry.borders
      .map((border) => {
        const borderCountry = this.props.countries.filter((country) => {
          return country.cca3 === border;
        });

        return borderCountry;
      })
      .flat();
    const countriesNames = borders.map((countryName, index) => {
      return (
        <Link to={`/country-details/${countryName.cca3}`}>
          <li key={index}>{countryName.name.common}</li>
        </Link>
      );
    });
    console.log(borders);
    return (
      <div className="CountriesDetails">
        <h1>Country Details</h1>
        <h2>{filterCountry.name.common}</h2>
        <p>Capital: {filterCountry.capital[0]}</p>
        <p>Area: {filterCountry.area} km2</p>
        <p>Borders:</p>
        <ul>{countriesNames}</ul>
      </div>
    );
  }
}

export default CountriesDetails;
