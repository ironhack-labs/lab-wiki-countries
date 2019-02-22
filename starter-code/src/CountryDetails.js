import React, { Component } from "react";
import AllCountries from "./countries.json";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { params } = this.props.match;
    const { countryArray } = this.state;
    console.log(params.countryId);
    const countryItem = AllCountries.find(oneCountry => {
      return oneCountry.name.official === params.countryId;
    });
    const borderCountries = countryItem.borders;
    // var borderCountriesArray = AllCountries.reduce(function(a, b) {
    //   return [borderCountries.indexOf(b.cca3 === 1)];
    // });
    var borderCountriesArray = AllCountries.filter(
      oneCountry => borderCountries.indexOf(oneCountry.cca3) > -1
    );
    console.log(borderCountriesArray);

    return (
      <section className="CountryDetails">
        <h2>{countryItem.name.official}</h2>
        <div>
          <p> Capital {countryItem.capital}</p>
        </div>
        <div>
          <p>Area {countryItem.area} km2</p>
        </div>
        <div>
          <ul>
            {countryArray}
            <li />
          </ul>
        </div>
      </section>
    );
  }
}

export default CountryDetails;
