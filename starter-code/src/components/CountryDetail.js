import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class CountryDetail extends Component {
    
  render() {
    let country = this.props.countries.find(country => this.props.match.params.id === country.cca3
    )

    return (
      <div className="col-7">
         <h1>{country.name.common}</h1>
        <table className="table">
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
                    {country.borders.map(border => {
                        return <li><Link to={`${border}`}>{border}</Link></li>
                    })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryDetail