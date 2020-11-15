import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {
  const getCountry = (country) => {
    const result = countries.filter((ele) => {
      return ele.cca3 === country;
    });
    return result[0];
  };

  const foundCountry = getCountry(props.match.params.country);
  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
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
                {foundCountry.borders.map((ele, index) => {
                  return (
                    <li>
                      <Link to={`/${ele}`}>{getCountry(ele).name.common}</Link>
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

export default CountryDetails;
