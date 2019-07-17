import React, { Component } from 'react'



export default class CountryDetail extends Component {
  // constructor(props) {
  //   super()

  //   this.state = {
  //     countries: props.movies
  //   }
  // }
  render() {
    return (
      <div class="col-7">
      <h1>{this.props.country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{this.props.country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{this.props.country.area}Km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}
