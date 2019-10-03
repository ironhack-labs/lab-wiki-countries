
import React, { Component } from "react";

import countryData from "./../countries";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCLick: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const countryCLick = countryData.find(item => item.cca3 === id);
    return {
      ...state,
      countryCLick
    };
  }

  render() {
    const country = this.state.countryCLick;
    console.log(country);
    return (
      (country && (
        <div className="col-7">
          <h1> {country.name.official}</h1>
          <div class="container">
            <div class="row">
              <div class="col-sm">Capital: </div>
              <div class="col-sm">{country.capital}</div>
            </div>
            <div class="row ">
              <div class="col-sm">Area: </div>
              <div class="col-sm">{country.area} </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">Borders: </div>
            <div class="col-sm">{country.borders} </div>
          </div>
        </div>
      )) || (
        <div>
          <p>Project loading...</p>
        </div>
      )
    );
  }
}