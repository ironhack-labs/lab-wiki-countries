import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'

export default class CountryDetail extends Component {
  render () {
    const { params } = this.props.match
    const showCountry = countries.find(
      oneCountry => oneCountry.cca3 === params.cca3
    )

    const borderObjects = showCountry.borders.map(cca3 => {
      return (
        <li>
          <Link to={`/CountryDetail/${cca3}`}>
            {
              countries.find(borderCountry => borderCountry.cca3 === cca3).name
                .common
            }
          </Link>
        </li>
      )
    })

    return (
      <div className='col-7'>
        <h1>{showCountry.name.common}</h1>
        <table className='table'>
          <thead></thead>
          <tbody>
            <tr>
              <td styleName='width: 30%;'>Capital</td>
              <td>{showCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{showCountry.area} km²</td>
            </tr>
            <tr>
              <td>Borders</td>

                
                  <td><ul>{borderObjects}</ul></td>
                
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
