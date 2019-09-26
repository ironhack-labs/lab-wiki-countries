import React, { Component } from "react";

import countries from "./../countries";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  //   componentDidMount() {
  //     const id = this.props.match.params.id;
  //     const country = countries.find(item => item.cca3 === id);
  //     this.setState({
  //       country
  //     });
  //   }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(item => item.cca3 === id);
    return {
      ...state,
      country
    };
  }

  render() {
    const country = this.state.country;
    return (
      (country && (
        <div>
          <h1>{country.name.common}</h1>
          <p>{country.capital}</p>
          <p>{country.area}</p>
          <p>{country.borders}</p>
        </div>
      )) || <div>No countries to anyone</div>
    );
  }
}
