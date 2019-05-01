import React, { Component } from 'react'
import countries from "./countries.json"
import { Link } from 'react-router-dom'
import "./CountryDetails.css"

export default class CountryDetail extends Component {

  state = {
    country: {name: "", capital: "", area: 0, borders: [""]},
    countries: countries
  }

  nameFinder(tag) {
    let y = countries.filter(country => country.cca3 === tag)
    return `${y[0].flag} - ${y[0].name.common}`
  }

  render() {
    
    let x = this.state.countries.filter(country => {
      return country.cca3 === this.props.match.params.tag
      })

    let selectedCountry = x[0]

    return (
       <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
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
                  {selectedCountry.borders.map((border, idx) => {
                    return <li key={idx}><Link to={`/${border}`}>{this.nameFinder(border)}</Link></li>
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
