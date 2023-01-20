import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import countriesFromJson from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const [details, setDetails] = useState('');

  const params = useParams();
  const countryId = params.id;

  const filteredCountry = countriesFromJson.filter((country) => {
    return country.alpha3Code === countryId;
  });

  const result = filteredCountry;
  setDetails(result);

  return (
    <div className="col-7">
      <h1>{details.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 30 + '%' }}>Capital: </td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {details.borders.map((country) => {
                return (
                <li>
                  <Link to={"/" + country.alpha3Code}>{country.name.common}</Link>
                </li>
                )
              })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
