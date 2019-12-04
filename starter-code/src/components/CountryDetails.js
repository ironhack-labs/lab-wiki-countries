import React, { Component } from "react";
import countries from "../countries.json";
import Country from "./Country";

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      countries: [...countries]
    };
  }
  render() {
    return (
      <div className="list-group">

        {this.state.countries.map((country, idx) => (
          <Country key={idx} {...country} />
        ))}

      </div>
    );
  }
}

export default CountryDetails;
