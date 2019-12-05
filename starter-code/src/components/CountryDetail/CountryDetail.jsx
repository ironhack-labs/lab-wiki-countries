import React, { Component } from "react";
import countries from "./../../countries.json";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const currentCountryName = this.props.match.params.name;
    const previousCountryName = previousProps.match.params.name;
    if (currentCountryName !== previousCountryName) {
      this.fetchData();
    }
  }

  fetchData() {
    // Fetch the information from the URL using the props, targeting the value inside params
    console.log(this.props.match.params.id);
    const countryId = this.props.match.params.name;
    // find() will return us an object, in this case, that matches the one with the same cca3
    const selectedCountry = countries.find(country => {
      return countryId === country.cca3;
    });
    console.log(selectedCountry);
  }
  render() {
    return <div></div>;
  }
}
