import React, { Component } from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  render() {
    let {name,capital,borders,area}=countries.find(country=>country.cca3==this.props.match.params.id)
    return (
      <div class="col-7">
      <h1>{name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{"width": "30%"}}>Capital</td>
            <td>{capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {borders.map((border, index) => {
                    return (<li key={index}><Link to={"/"+border}>{countries.find(country=>country.cca3==border).name.common}</Link></li>)
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
