import React from "react";
import {Component} from "react";
import countries from "../countries.json";

class CountryDetail extends Component {
  render() {
    console.log(this)
    let country = countries.map((country) => {
      if (this.props.match.params.cca3 === country.cca3) {
        return (
          <div>
          <h1>{country.name.official}</h1>
          <div><p>Capital :</p>{country.capital}</div>
          <div><p>Area :</p>{country.area}</div>
          <div><p>Borders :</p>{country.borders}</div>
          </div>
        )
      }
    })
    return(
      <div className="CountryDetail">
        {country}
      </div>
    );
  }
}

export default CountryDetail;