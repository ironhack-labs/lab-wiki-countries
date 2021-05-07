import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const getCountry = (id) => {
    return countries.find((country) => country.cca3 === id);
  };

  const foundedCountry = getCountry(props.match.params.id);
  console.log(foundedCountry);

  return (
    <div>
      <h1>{foundedCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundedCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundedCountry.borders.map((country) => {
                  return (
                    <li key={country}>
                      <Link to={`/${country}`}>{country}</Link>
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
};

export default CountryDetails;
