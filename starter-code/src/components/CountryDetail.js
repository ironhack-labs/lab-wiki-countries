import React, { Component } from "react";
import countries from "../countries.json";
import {NavLink, Link} from "react-router-dom"

export default class CountryDetail extends Component {
  render() {


    let country = countries.find(o => {
      return o.cca2 === this.props.match.params.id;
    });
    console.log(country);

    let borders = country.borders.map((border,i) => {
      return (

        <li>
          <Link key={i} to={`/${border}` }>{border}</Link>
        </li>
      );
    });


    return (
      <div>
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital[0]}</td>
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
                  {borders}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
