import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    console.log(this.props.borders);
    return (
      <div className='col-7'>
        <h1>{this.props.country.flag} {this.props.country.name.common} {this.props.country.flag}</h1>
        <table className='table'>
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {this.props.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {this.props.borders.map((border, idx)=> {
                    return <li key={idx}>
                    <Link to={border.cca3}>{border.name.common}</Link>
                  </li>
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
