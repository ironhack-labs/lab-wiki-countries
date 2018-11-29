import React, { Component } from "react";
import { Link } from "react-router-dom";
import countryArray from "../countries.json";

function findCountry(oneCountryId) {
  return countryArray.find(oneCountry => {
    return oneCountry.cca3 === oneCountryId;
  });
}
class CountryDetails extends Component {
  render() {
    const { params } = this.props.match;
    const CountryData = findCountry(params.countryCode);
    return (
      <div className="Countrytable">
        <h1>{CountryData.name.common}</h1>
        <div className="CountryDetails">
          <div className="CountryDetailsList">
            <p>
              <span>Capital</span>
            </p>
            <p>
              <span>Area</span>
            </p>
            <p>
              <span>Borders</span>
            </p>
          </div>
          <div className="CountryDetailsList">
            <p>
              <span>{CountryData.capital}</span>
            </p>
            <p>
              <span>{CountryData.area}</span>
            </p>
            <ul>
              {CountryData.borders.map(oneCountryCode => {
                return (
                  <li key={oneCountryCode}>
                    <Link to={`/${oneCountryCode}`}>
                      {findCountry(oneCountryCode).name.common}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
