import React, { Component } from "react";
import countries from "../src/countries";

//console.log(countries)

class CountryList extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <div className="row">
        <h3>elm.name.common</h3>
        <p>elm.flag</p>
      </div>
    );
  }
}

export default CountryList;
