import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class CountryDetail extends Component {
  render() {
    let country = this.props.countries.find(eachCountry => {
      // console.log(eachCountry.name.common);
      return this.props.match.params.id === eachCountry.cca3
    })
    // console.log("countries from countrydetails " + this.props.countries);
    // console.log("country from countrydetails " + country.name.common);
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
                    {country.borders.map(eachBorder => {
                        return <li><Link to={`${eachBorder}`}>{eachBorder}</Link></li>
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
