import React from 'react';
import './CountryDetails.css';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';
import '../CountriesList/CountriesList';

class CountryDetails extends React.Component {

  selectedCountry() {
    countries.filter((country) => country.name === name);
  }

  render() {

    return (
      <div className='col-7'>
        <h1>{() => this.selectedCountry.name}</h1>
        <table className='table'>
          <thead>
          <tbody>
          <tr>
            <td>Capital</td>
            <td>{() => this.selectedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {() => this.selectedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {() => this.selectedCountry.borders.map(country =>
                  <li>
                    <Link to={country}>{
                      countries.filter(country => country.name === country)[0].name}
                    </Link>
                  </li>)}
              </ul>
            </td>
          </tr>
          </tbody>
          </thead>
        </table>
      </div>
    );
  }
}

export default CountryDetails;