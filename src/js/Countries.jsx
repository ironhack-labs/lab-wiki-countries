import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import CountriesData from "../data/countries.json";
import CountryDetails from "./CountryDetails";

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    this.setState({ countries: CountriesData });
  }

  render() {
    const countryList = this.state.countries.map((country, index) => {
      return (
        <li key={country.cca3} className="country-item">
          {country.flag}
          <Link to={`/${country.cca3}`}> {country.name.common}</Link>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="topbar">WikiCountries</div>
        <div className="content">
          <div className="country-list">
            <h3>Countries</h3>
            {countryList}
          </div>
          <div className="country-details-container">
            <Route
              path="/:cc"
              render={() => {
                return (
                  <div>
                    <CountryDetails
                      countries={countryList}
                      countryData={this.state.countries}
                    />
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
