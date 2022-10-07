import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countriesData }) {
  const { id } = useParams();

  return (
    <div>
      {countriesData
        .filter((country) => {
          return country.alpha3Code === id;
        })
        .map((country) => {
          return (
            <div key={country.alpha3Code}>
              <h1>{country.name.common}</h1>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{country.area} km2</td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      {country.borders.map((oneBorder) => {
                        const findNameBorder = countriesData.find(
                          (country) => country.alpha3Code === oneBorder
                        );

                        return (
                          <li key={oneBorder}>
                            <Link to={`/${findNameBorder.alpha3Code}`}>
                              {findNameBorder.name.common}
                            </Link>
                          </li>
                        );
                      })}
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
