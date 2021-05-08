import React from 'react';
import './CountryDetails.css';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

class CountryDetails extends React.Component {

  render() {
    let country = countries.filter((country) => {
      return country.cca3 === this.props.match.params.cca3;
    })[0];
    return (

      <div className='col-7'>
        <h1>{country.name.common}</h1>
        <table className='table'>

          <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 =>
                  <li>
                    <Link to={cca3}>{
                      countries.filter(country => country.cca3 === cca3)[0].name.common}
                    </Link>
                  </li>)}
              </ul>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    );
  }
}

export default CountryDetails;