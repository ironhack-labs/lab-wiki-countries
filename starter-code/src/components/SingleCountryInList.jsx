import React, { Component } from "react";
import { Link } from "react-router-dom";
import file from "../countries.json";
import CountryDetail from "./CountryDetail";

class SingleCountryInList extends Component {
  state = {
    countrySelected: ""
  };

  render() {
    return (
      <div>
        <Link to={`/CountryDetail/${this.props.cca3}`}>
          <img
            src={`https://www.countryflags.io/${this.props.cca2.toLowerCase()}/flat/64.png`}
          />
          {this.props.countryname}
        </Link>
      </div>
    );
  }
}

export default SingleCountryInList;
