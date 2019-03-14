import React, { Component } from 'react'

export default class SingleCountryView extends Component {
  render() {
    var country = this.props.country;
    if (country === null) {
      return ('')
    } else {
      return (
        <div>
          <h1>{country.flag} {country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km
                    <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      return <li><a href="/AND">{border}</a></li>
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
}
