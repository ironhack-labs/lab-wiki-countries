import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countryList }) {
  const { id } = useParams();

  return (
    <div className="col-7">
      {countryList
        .filter((newCountry) => {
          return newCountry._id === id;
        })
        .map((country) => {
          return (
            <div key={country._id}>
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
                      {country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {country.borders.map((border) => {
                          return (
                            <li key={border}>
                              <Link>{border}</Link>
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
        })}
    </div>
  );
}

export default CountryDetails;
