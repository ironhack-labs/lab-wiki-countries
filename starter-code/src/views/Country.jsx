import React, { Component } from "react";

import countries from "./../countries";

export default class CountryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      id: null
    };
    this.getCountries = this.getCountries.bind(this);
  }

  getCountries = place => {
    let name = "";
    let island = "This is an island!";
    countries.filter(item => {
      if (place === item.cca3) {
        name = item.name.common;
      }
    });

    if (place.length < 1) {
      return island;
    } else {
      return name;
    }
  };

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;

    const country = countries.find(item => item.cca3 === id);
    return {
      ...state,
      country,
      id
    };
  }

  render() {
    const country = this.state.country;
    let countryBorder = country.borders.length;
    console.log(countryBorder);
    return (
      <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km&#178;</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryBorder > 0 ? (
                    country.borders.map(country => (
                      <li>
                        <a href={country}>{this.getCountries(country)}</a>
                      </li>
                    ))
                  ) : (
                    <p>None! This is an island silly!</p>
                  )}

                  {/* {country.borders.map(country => (
                    <li>
                      <a href={country}>{this.getCountries(country)}</a>
                    </li>
                  ))} */}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
