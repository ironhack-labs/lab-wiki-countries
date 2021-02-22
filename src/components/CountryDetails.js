import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails({ match, countries }) {
  const { params } = match;
  const id = params.cca3;

  const filteredCountry = countries.find((country) => country.cca3 === id);

  const borders = filteredCountry.borders;

  let bordersWithCountryInfo = [];

  function borderFiltering() {
    for (let i = 0; i < borders.length; i++) {
      let borderCountry = countries.find(
        (country) => country.cca3 === borders[i]
      );
      bordersWithCountryInfo.push(borderCountry);
    }
  }

  borderFiltering();

  const filteredBorders = bordersWithCountryInfo.map((border) => (
    <li>
      <Link to={`/country/${border.cca3}`}>{border.name.common}</Link>
    </li>
  ));

  return (
    <div className="col-7">
      <h1>{filteredCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{filteredCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {filteredCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{filteredBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
