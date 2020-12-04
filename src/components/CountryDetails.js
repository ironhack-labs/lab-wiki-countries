import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import countries from './../countries.json';

function CountryDetails(props) {
  const countryId = props.match.params.countryId;

  const foundCountry = props.countries.find((country) => {
    return country.cca3 === countryId;
  });

  return (
    <div className="col-7">
      <h1> {foundCountry.name.official} </h1>
      <table className="table">
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
                {foundCountry.borders.length == 0 ? (
                  <p>Error</p>
                ) : (
                  foundCountry.borders
                    .map((code) =>
                      props.countries.find((country) => code === country.cca3)
                    )
                    .map((item, i) => {
                      return (
                        <li key={i}>
                          <Link to={`/${item.cca3}`}>{item.name.common}</Link>
                        </li>
                      );
                    })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
