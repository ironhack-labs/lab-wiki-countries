import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

class DisplayCountries extends Component {
  render() {
    console.log(countries);
    return countries.map((country, index) => {
      return (
        <div className="border country-container" key={index}>
          <Link className="link" to={`/detail/${country.cca3}`}>
            {country.flag} {country.name.common}
          </Link>
        </div>
      );
    });
  }
}

export default DisplayCountries;
