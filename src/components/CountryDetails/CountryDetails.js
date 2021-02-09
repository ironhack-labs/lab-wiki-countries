import React from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const getCountry = (id) => {
    const countryFind = (country) => {
      return country.cca3 === id;
    };
    return countries.find(countryFind);
  };

  const { params } = props.match;
  const currentCountry = getCountry(params.country);

  return { currentCountry } ? (
    <div className="col-7 col-sm">
      <h1>{currentCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map((country, i) => (
                  <li key={i}>
                    <Link to={`/${country}`}>{country}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    ''
  );
};

export default CountryDetails;
