import React, { Component } from "react";
import countries from "../countries.json";

export default class InfoCountry extends Component {
  render() {
    let chosenCountry = countries.find(
      elem => elem.cca3 === this.props.match.params.cca3
    );

    return (
      <div className="detail-container">
        <h1>{chosenCountry.name.common}</h1>

        <h4>Capital</h4>
        <h4>{chosenCountry.capital}</h4>

        <h4>Area</h4>
        <h4>{chosenCountry.area} Km2</h4>

        <h4>Borders</h4>
      </div>
    );
  }
}
