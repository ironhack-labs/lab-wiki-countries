import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    const { area } = this.props.match.params;
    const eachCountry = this.props.countries.filter(
      country => country.area == area
    )[0];
    const neighborCountries = this.props.countries.filter(country =>
      country.borders.includes(eachCountry.cca3)
    );


    return (
      <div className="details">
        <h1>{eachCountry.name.official}</h1>
        <div>
          <span>Capital: </span> {eachCountry.capital}
        </div>
        <div>
          <span>Area: </span> {eachCountry.area}
        </div>
        <div>
        <div className="borders"></div>
          <span>Borders: </span>
          {eachCountry.borders.length >= 1 ? (
            <ul>
            {neighborCountries.map((neighbor, index) => (
                <li key={index}>
                  <Link to={`/country/${neighbor.area}`}>
                    {neighbor.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            "None"
          )}
        </div>
      </div>
    );
  }
}

export default CountryDetails;
