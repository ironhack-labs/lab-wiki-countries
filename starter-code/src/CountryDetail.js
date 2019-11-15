import React, { Component } from "react";
import countries from "./countries.json";
export default class CountryDetail extends Component {
  render() {
    console.log(countries);
    console.log(this);
    console.log(this.props.match.params.id);

    let country = countries.find(eachCountry => {
      return eachCountry.cca3 === this.props.match.params.id;
    });

    console.log(country);

    return (
      <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  
                  {country.borders.map((eachBorder, index) => (
                    <li>{eachBorder}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
