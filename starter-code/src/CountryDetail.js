import React, { Component } from "react";

export default class CountryDetail extends Component {
  render() {
    console.log(this.props.selectedCountry);
    if (this.props.selectedCountry.borders.length > 0) {

    }
    return (
      <div>
        <div>{this.props.selectedCountry.capital[0]}</div>
        <div>{this.props.selectedCountry.area + " m2"}</div>
        
           {this.props.selectedCountry.borders}
      
      </div>
    );
  }
}
