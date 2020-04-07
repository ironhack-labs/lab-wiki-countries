import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


class CountryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = 
        {countries: countries}
  }

  render() {

    let theCountry = this.state.countries.find((country) => 
        country.cca3 === this.props.match.params.cca3);
    
    return (
      <div class="col-6">
        <h1>{theCountry.name.common}</h1>
        <table className="country-table">
          <tbody>
            <tr>
              <td style={{width: "60%"}}>Capital</td>
              <td>{theCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {theCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {theCountry.borders.map((country, index) => (
                    <li>
                    <Link to={`/country-detail/${country}`}>{country}</Link>
                    </li>
                  ))}
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