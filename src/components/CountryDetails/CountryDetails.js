import React from 'react';
import countries from '/Users/andrekleine/Documents/ironhack/m2/w4/lab-wiki-countries/src/countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const getCountry = (id) => {
    const theCountry = (country) => {
      return country.cca3 === id;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${foundCountry.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((neighborCode) => {
                  return (
                    <li key={neighborCode}>
                      <Link to={`/${neighborCode}`}>{getCountry(neighborCode).name.common}</Link>
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
};

export default CountryDetails;
