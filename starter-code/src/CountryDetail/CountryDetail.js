import React, { Component } from 'react'

export default class CountryDetail extends Component {
  render() {
    return (
        <div className="col-7">
            <h1>{this.props.country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:"30%"}}>Capital</td>
                  <td>{this.props.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.country.area} Km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {this.props.country.borders.map((country, i) =>(<li key={i}><a href={country}>{this.props.borders(country)}</a></li>))}

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

    )
  }
}
