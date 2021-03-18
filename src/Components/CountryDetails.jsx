import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryCode = props.match.params.countryCode;
  const foundCountry = props.countries.find(
    (country) => country.cca3 === countryCode
  );
  return (
    <div className="col-7">
      <h1 style={{
          textAlign:"left"
      }}>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td
              style={{
                width: '30%',
              }}
            >
              Capital
            </td>
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
              <ul style={{
                  listStyle: "none",
                  padding: "0"
              }}>
                {foundCountry.borders.length === 0 ? (
                  <p>Not sharing borders with other countries</p>
                ) : (
                  foundCountry.borders.map((country, i) => (
                    <li key={i}>
                      <Link to={country}>
                        {
                          props.countries.find((el) => el.cca3 === country).name
                            .common
                        }
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
