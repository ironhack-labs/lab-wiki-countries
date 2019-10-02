import React, { Component } from "react";
import Allcountries from "./countries.json";
import { Link } from "react-router-dom";

export default class CountrySpecs extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.borders.map(country => {
                    let borderCountry = Allcountries.filter(countries => countries.cca3===country)[0];
                    console.log(borderCountry)
                    // return <li><a href={country}>{borderCountry.name.official}</a></li>
                    
                    return <li><Link to={country}> {borderCountry.name.official}</Link></li>
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
