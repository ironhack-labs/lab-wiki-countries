import React, { Component } from "react";

class CountryDetails extends Component {
  state = {
    country: this.props.countries[0],
    borders: this.props.countries[0].borders[0]
  };

  getCountryDetails = index => {
    this.setState({ country: this.props.countries[index] });
  };

  render() {
    return (
      <div className="app">
        <div>
          {this.props.countries.map((country, index) => {
            return (
              <div
                onClick={() => this.getCountryDetails(index)}
                key={index}
                className="country"
              >
                <span>{country.flag}</span>
                <span>{country.name.common}</span>
              </div>
            );
          })}
        </div>
        <div>
          <h1>{this.state.country.name.common}</h1>
          <div>Capital {this.state.country.capital}</div>
          <div>Area {this.state.country.area}</div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
