import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    const { area } = this.props.match.params;
    const eachCountry = this.props.countries.filter(
      country => country.area == area
    )[0];
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
          <span>Borders: </span>
          {eachCountry.borders.length >= 1 ? (
            <ul>
              {eachCountry.borders.map((border, index) => (
                <Link to={`/country/${area}`}>
                  <li key={index}>{border}</li>
                </Link>
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
