import React from 'react';
import countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountryDetail(props) {
  const getCountry = (cca3) => {
    return countries.find((el) => el.cca3 === cca3);
  };
  const { params } = props.match;
	const foundCountry = getCountry(params.cca3);
	


  return (
    <div class="col-5">
      <h1>{foundCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} m<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((countryName) => {
                  return (
                    <li>
                      <NavLink to={`/countries/${countryName}`}>
                        {countryName}
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

export default CountryDetail;
