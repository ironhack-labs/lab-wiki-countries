import React from "react";
import "./CountryDetail.css";
import countries from "./countries.json";
let arrCountries = [...countries];

export default class Country extends React.Component {
  render() {
    return (
      <div>
        <h1>{arrCountries.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="Capital">Capital</td>
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
                  {this.props.borders.map(border => (
                    <li>
                      <a href={border.cca3}>{border.name}</a>
                    </li>
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
