import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const countryId = props.match.params.id;
  const country = props.countries.find(element => element.cca3 === countryId);
  const borders = country.borders.map(border => {
    const borderCountry = props.countries.find(country => country.cca3 === border);

    return (
      <li key={border}><Link to={`/countries/${border}`}>{borderCountry.name.official}</Link></li>
    ) 
    });

  return (
    <div>
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Flag</td>
            <td>
              <img
                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                alt={country.name.official}/>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};