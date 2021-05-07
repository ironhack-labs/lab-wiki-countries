import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  let { id: countryId } = useParams();
  const country = props.countries.find((el) => el.cca3 === countryId);

  const borders = country.borders.map((border) => {
    let bordercountry = props.countries.find((el) => el.cca3 === border);
    return (
      <li key={'sub-' + border}>
        <Link to={`/countries/${border}`}>{bordercountry.name.official}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>{country.name.common}</h1>
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
            <td>Borders</td>
            <td>
              <ul>{borders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
