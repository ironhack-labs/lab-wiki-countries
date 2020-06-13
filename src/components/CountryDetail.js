import React from 'react';
import countriesJSON from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountryDetail(props) {
  const getCountry = (cca3) => {
    return countriesJSON.find((el) => el.cca3 === cca3);
  };
  const { params } = props.match;
  const foundCountry = getCountry(params.cca3);

  return (
    <div className="col-7">
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
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((eachBorder) => {
                  const eachFullBorder = getCountry(eachBorder);
                  return (
                    <li>
                      <NavLink to={`/countries/${eachBorder}`}>
                        {eachFullBorder.name.common}
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
