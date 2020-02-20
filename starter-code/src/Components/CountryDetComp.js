import React, { Component } from "react";
import countriesAll from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const countryCont = countriesAll.filter(
      country => {
      console.log(country.cca3, this.props.match.params)
      return country.cca3 === this.props.match.params.id}
    )[0];

    return (
      <div>
        <h1>{countryCont.name.common}</h1>
        <p>Capital: {countryCont.capital}</p>
        <p>Area: {countryCont.area}</p>

        <div>
          {countryCont.borders.map(item => (
            <li>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </div>
      </div>
    );
  }
}
export default CountryDetail;
