import React, { Component } from 'react'
import countries from '../Utils/countries.json';
import { Link } from 'react-router-dom';


export default class CountryDetail extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

  render() {
    let selectedCountry = this.state.countries.filter((country) => country.cca3 === this.props.match.params.cca3)[0];
    let borders = selectedCountry.borders.map((border,i) => {
      let completeName = this.state.countries.filter((country) => country.cca3 === border)[0];
      return <li key={i} ><Link to={border}>{completeName.name.common}</Link></li>
  })
    return ( 
      <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{selectedCountry.area} km
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

    ) 
  }
}