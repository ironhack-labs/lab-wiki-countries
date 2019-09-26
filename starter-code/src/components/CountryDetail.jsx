import React, { Component } from "react";
import countries from "./../countries.json";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryDetail: null
    };
  }
  static getDerivedStateFromProps(props, state) {
    const cca3 = props.match.params.cca3;
    const countryDetail = countries.find(country => country.cca3 === cca3);
    return {
      countryDetail: countryDetail
    };
  }
  render() {
    console.log("COUNTRYDETAILS", this.state.countryDetail);
    // const countryDetail = this.state.countryDetail;
    return (
      <div>
        {/* TODO. Wrap everything in a condition that checks if the state is defined */}
        <h1>
          {this.state.countryDetail && this.state.countryDetail.name.common}
        </h1>
        <div className="row property">
          <div className="col-4">Capital:</div>
          <div className="col-8">{this.state.countryDetail.capital}</div>
        </div>
        <div className="row property">
          <div className="col-4">Area:</div>
          <div className="col-8">{this.state.countryDetail.area}km</div>
        </div>
        <div className="row property">
          <div className="col-4">Borders:</div>
          <div className="col-8">
            <ul>{this.state.countryDetail.borders}</ul>
          </div>
        </div>
      </div>
    );
  }
}
