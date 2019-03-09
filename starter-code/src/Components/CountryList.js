import React from "react";
import {Component} from 'react';
import {Link} from "react-router-dom";
import countries from "../countries.json";

class CountryList extends Component {
  state={
    listOfCountries: countries
  }
  showListOfCountries = () => {
    return this.state.listOfCountries.map(( country ) => (
      <li><Link to={`/country/${country.cca3}`}>
      {country.flag}
      {country.name.official}
      </Link></li>
    ))
  }
  render() {
    return (
      <div className="CountryList">
        {this.showListOfCountries()}
      </div>
    )
  }
}

export default CountryList;