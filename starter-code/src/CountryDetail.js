import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom';
import './CountryDetail.css';

export default class CountryDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: countries
      
      
    }
  }
  render() {
    var selectedCountry = this.state.country.filter((country) => {
      console.log( country.cca3 === this.props.match.params.cca3)
      return country.cca3 === this.props.match.params.cca3
      
    })
    console.log(selectedCountry)
    return (
      
      
      <div className="col-7">
      <h1>{selectedCountry[0].name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{selectedCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{selectedCountry[0].area} km2</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>{selectedCountry[0].borders.map((country) => {
          return (
           
          <Link className="list-group-item list-group-item-action" to={country}>{country}</Link>
          
          )
          })}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     
  
    )
  }
}
