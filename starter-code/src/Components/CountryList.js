import React from "react";
import {Component} from 'react';
import {Link} from "react-router-dom";
import countries from "../countries.json";
import CountryDetail from "./CountryDetail";

class CountryList extends Component {
  state={
    listOfCountries: countries
  }
  showListOfCountries = () => {
    return this.state.listOfCountries.map((country) => {
      return <link to={`/country/${country.cca3}`}>{country.fkag}{country.name.official}</link>
    })
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