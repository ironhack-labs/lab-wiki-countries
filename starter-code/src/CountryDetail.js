import React, { Component } from 'react';
import countries from "./countries.json";

export default class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      countryData: ""
    };
  }

  render() {
    return (
      <div>
        <div>
          Title
        </div>
        <div>
          Capital
        </div>
        <div>
          Area
        </div>
        <div>
          Borders
        </div>
      </div>
    )
  }
}
