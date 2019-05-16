import React, { Component } from 'react';
import Countries from './Countries';

export default class CountryBorders extends Component {
  // state = { borders: [] };

  // getBorders = _ => {
  //   this.setState({
  //     borders: <Countries {...this.props.country.borders} />
  //   });

  //   console.log(this.state.borders);

  //   // const countryBorders = this.state.countries.map((country, i) => {
  //   //   return <li key={i}>{country.borders}</li>;
  //   // });
  //   // return countryBorders;
  // };

  render() {
    return <div>{/* <ul>{this.getBorders()}</ul> */}</div>;
  }
}
