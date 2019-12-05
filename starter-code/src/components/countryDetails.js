import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

class countryDetails extends Component {
  render() {
    //console.log(this.props.match.params.cca3);

    let getCountry = idx =>
      countries.find(oneCountry => oneCountry.cca3 === idx);
    let foundCountry = getCountry(this.props.match.params.cca3);

    return (
      <>
        <ul className="list-group">
          <li>
            <h1>{foundCountry.name.common}</h1>
          </li>
          <li>
            <h3>Capital:</h3>
            <h4>{foundCountry.capital}</h4>
          </li>
          <li>
            <h3>Area:</h3>
            <h4>{foundCountry.area} km2</h4>
          </li>
          <li>
            <h3>Borders:</h3>
            <ul>
              {foundCountry.borders.map((elm, idx) => (
                <li key={idx}>
                  <Link to={elm}>{elm}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </>
    );
  }
}

export default countryDetails;
