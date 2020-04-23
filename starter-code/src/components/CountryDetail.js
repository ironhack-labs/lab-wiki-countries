import React, {Component} from 'react';
import countries from '../countries';
import {Link} from "react-router-dom";

class CountryDetail extends Component {

  getBorderCountries(borders) {
    return borders.map((borderCode, index) => {
      const country = this.getCountryByCode(borderCode);
      return <li key={index}><Link to={`/${country.cca3}`}>{country.name.common}</Link></li>
    });
  }

  getCountryByCode(code) {
    return countries.filter(country => country.cca3 === code)[0];
  }


  render() {
    const {match: {params: {countryCode = 'ABW'} = {}} = {}} = this.props;
    const country = countries.filter(country => country.cca3 === countryCode)[0];
    let borders = undefined;
    if (country) {
      borders = this.getBorderCountries(country.borders);
    } else {
      this.props.handleNotFoundCountry();
    }
    return (
      <React.Fragment>
        {
          country ?
            <React.Fragment>
              <h1>{country.name.official}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                  <td style={{'width': '30%'}}>Capital</td>
                  <td>{country.capital[0]}</td>
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
                      {borders}
                    </ul>
                  </td>
                </tr>
                </tbody>
              </table>
            </React.Fragment>
            :
            <React.Fragment>
              <h1>Not found</h1>
            </React.Fragment>
        }
      </React.Fragment>

    );
  }
}

export default CountryDetail;