import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"

import countries from "./countries.json"

class CountryDetails extends Component {
  state = {
    countries: countries
  }
  render() {
    const details = this.state.countries.find((country)=>{
      return country.cca3 === this.props.match.params.countryCode
    })
    
    const borderList = this.state.countries.map((country, i)=>{
      if(details.borders.includes(country.cca3)) {
        return(
          <li key={i}>
            <Link to={details.borders[details.borders.indexOf(country.cca3)]}>
              {country.flag}{country.name.common}
            </Link>
          </li>
          )
      }  
    })

    return (
      <div className="col-7">
        <h1>{details.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                {(details.capital[0] !== "") ?
                <tr>
                  <td className="capital">Capital</td>
                  <td>{details.capital}</td>
                </tr>
                : <tr></tr>}
                <tr>
                  <td>Area</td>
                  <td>{details.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                {(details.borders[0]) ?
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borderList}
                    </ul>
                  </td>
                </tr>
                : <tr></tr>}
              </tbody>
            </table>
      </div>
    );
  }
}

export default CountryDetails;