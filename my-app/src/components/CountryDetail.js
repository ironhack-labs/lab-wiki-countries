import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

export default class CountryDetail extends React.Component {
  render() {
    let country = countries.find(
      country => country.cca3 === this.props.match.params.cca3
    );
    let bordersArray = country.borders.slice();
    let borders = countries.filter(country =>
      bordersArray.includes(country.cca3)
    );
    return (
      <div>
        <h2>{country.name.common}</h2>
        <hr />
        <h5>Capital: {country.capital}</h5>
        <hr />
        <h5>
          Area: {country.area} km
          <sup>2</sup>
        </h5>
        <hr />
        <h5>
          Borders:
          <span>
            <ul>
              {borders.map(country => (
                <li key={country.flag}>
                  <Link to={"/country/" + country.cca3}>
                    {country.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </h5>
      </div>
    );
  }
}