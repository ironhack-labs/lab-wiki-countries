import React, { Component } from 'react';
import countries from '../countries.json'
import {Link} from 'react-router-dom';

class CountryDetail extends Component {
  render() {
    let cca3 = this.props.match.params.cca3;
    let country = countries.filter(country => country.cca3 === cca3)[0]
    return (
      <div className="CountryDetail">
        <h1>{country.flag} {country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td id="tdtitle">Capital</td>
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
                  {
                    country.borders.map((border, i) => 
                      <li key={i}>
                        <Link to={`/${border}`} className='list-group-item list-group-item-action'>
                         {countries.find(country => country.cca3 === border).flag}  {countries.find(country => country.cca3 === border).name.common}
                        </Link>
                      </li>
                    )
                  }

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>   
    );
  }
}

export default CountryDetail;
