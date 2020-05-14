import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import countries from './../countries.json';

class CountryDetail extends Component {
  state = {
    countries: countries,
  };

  render() {
    // Get the id from props.match.params.id
    const codeCountry = this.props.match.params.cca3;

    // Find the exact project by looping over el Country array
    const foundCountry = countries.find(
      (country) => codeCountry === country.cca3
    );
    console.log(foundCountry);

    return (
      <div className="col-7">
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area}</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((border) => {
                    let borderCountries = countries.find(
                      (country) => border === country.cca3
                    );
                    
                    return (
                      <li>
                        <NavLink
                          key={borderCountries.cca3}
                          to={`/${borderCountries.cca3}`}
                        >
                          {borderCountries.name.official}
                        </NavLink>
                      </li>
                    );
                  })}
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
