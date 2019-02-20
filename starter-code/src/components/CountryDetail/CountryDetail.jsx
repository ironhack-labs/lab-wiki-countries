import React, { Component } from "react";
import countries from "../../countries.json";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    const cca = this.props.cca;
    if (!cca) {
      return null;
    }
    const myCountry = countries.find(country => country.cca3 === cca);
    return (
      <>
        <h1>{myCountry.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{myCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {myCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {myCountry.borders.map(borderCca => {
                    const borderCountry = countries.find(
                      country => country.cca3 === borderCca
                    );
                    return (
                      <li key={borderCca}>
                        <Link to={"/" + borderCca}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
