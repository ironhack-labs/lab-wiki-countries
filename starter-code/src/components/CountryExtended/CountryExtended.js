import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './CountryExtended.css'
import 'bootstrap/dist/css/bootstrap.css';


export default class CountryExtended extends Component {


  render() {
    return (
      <div className="countryExtended">
        <div className="col-7">
          <h1>{this.props.specificCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{this.props.specificCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{this.props.specificCountry.area}km
                    <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {this.props.specificCountry.borders}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
