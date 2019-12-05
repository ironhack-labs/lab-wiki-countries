import React, { Component } from "react";

import countryData from "./../countries";

import CountryCard from "./CountryCard";

class ListOfCountries extends Component {
  render() {
    return (
      <div className="list-group">
        <ul>
          {countryData.map((oneCountry, index) => (
            <CountryCard
              key={oneCountry.name}
              flag={oneCountry.flag}
              name={oneCountry.name}
              cca3={oneCountry.cca3}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListOfCountries;
