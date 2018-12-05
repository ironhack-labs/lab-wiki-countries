import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CountryInformation.css";
import countries from '../../countries.json'
export default class CountryInformation extends Component {


  filterCountry = (countries, countryId) => {
    return countries.filter(country => {
      return country.cca3 ===countryId;
    });
  };

  render() {

    let chosenCountry=this.filterCountry(countries, this.props.match.params.cca3)
    console.log(chosenCountry)
    return (
      <div className="card-information">
        <h1>{chosenCountry[0].name.common}</h1>
        <p>{chosenCountry[0].capital[0]}</p>
        <p>{chosenCountry[0].area} km2</p>
        <p>{chosenCountry[0].borders}</p>
      </div>
    );
  }
}
