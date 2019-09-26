import React, { Component } from "react";
import countries from "./../countries";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }
  // componentDidUpdate(prevState) {
  //   if (this.state.country !== prevState.country) {
  //     const id = this.props.match.params.id;
  //     const country = countries.find(item => item.cca3 === id);
  //     this.setState({
  //       country
  //     });
  //   }
  // }

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
    console.log(this.props);
    return (
      (country && (
        <div>
          <h1>{country.name.official}</h1>
        </div>
      )) || (
        <div>
          <p>Select a country</p>
        </div>
      )
    );
  }
}
