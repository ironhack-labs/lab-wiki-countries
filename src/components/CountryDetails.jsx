import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {

  const countryId = props.match.params.id;
  const country = countries.find((country) => country.cca3 === countryId);

  let borders;
  if (country.borders.length !== 0) {
    borders = country.borders.map((country) => {
      let borderCountry = countries.find((border) => border.cca3 === country);
      return (
        <li key={borderCountry.ccn3}>
          <Link to={`/${country}`}>{borderCountry.name.official}</Link>
        </li>
      );
    });
  } else {
    borders = <li>no borders</li>;
  }

  return (
    <div className="container">
      
      <div className="row">

        <div className="col-5">

          <div class="list-group">
            <h3>{country.name.common}</h3>
            <table class="table">
            
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}
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
          </div>

        </div>

      </div>
    </div>
  )
}

export default CountryDetails;
