import React, { Component } from 'react';
import { Link } from "react-router-dom";



class CountryDetails extends Component {

  filterCountryId = (ID) => {
    console.log('The id is:', ID)
    console.log('Countries', this.props.countries)
    return (
      this.props.countries.filter(info => info.cca3 === ID)[0]
    )
  }

  render() {
    const filteredOneCountry = this.filterCountryId(this.props.ID)
    return(
      <div class="col-7">
        <h1>{ filteredOneCountry.name.common }</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}><strong>Capital:</strong></td>
              <td>{ filteredOneCountry.capital }</td>
            </tr>
            <tr>
              <td><strong>Area:</strong></td>
              <td>{ filteredOneCountry.area } km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td><strong>Borders:</strong></td>
              <td>
                <ul>
                 { filteredOneCountry.borders.map((id, i) => {
                    return (
                      <li key={i}>
                        <Link to={id}>{this.filterCountryId(id).name.common}</Link>
                      </li>
                    )
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

export default CountryDetails;