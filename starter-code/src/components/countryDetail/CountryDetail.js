import React, { Component } from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  searchCountry(id) {
    return countries.find((country) => country.cca3 === id)
  }
  
  render() {
    const foundCountry = this.searchCountry(this.props.match.params.id);
    return (
      <div className="col-7">
        <h1>{foundCountry.translations.deu.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  { foundCountry.borders.map((countryCode) => {
                    return <li><Link key={countryCode} style={{listStyle: 'none'}} to={`/${countryCode}`}>{this.searchCountry(countryCode).translations.deu.common}</Link></li>
                  }) 
                }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryDetail;
