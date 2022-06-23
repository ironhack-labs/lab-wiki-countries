import React from 'react';
import { Link } from 'react-router-dom';

import './CountryDetails.css';

const CountryDetails = ({ alpha3Code, countries }) => {
  function findCountry(listOfCountries, alphaCode) {
    return listOfCountries.find((country) => country.alpha3Code === alphaCode);
  }
  const myCountry = findCountry(countries, alpha3Code);

  return (
    <>
      {/* <!-- Country Details (Bootstrap column) --> */}
      <div className="col-7">
        <h1>{myCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="capital">Capital</td>

              <td>{myCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {myCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {/* <li>
                    <a href="/AND">Andorra</a>
                  </li> */}
                  {myCountry.borders &&
                    myCountry.borders.map((border) => (
                      <li key={border}>
                        <Link to={`/${border}`}>
                          {findCountry(countries, border).name.common}
                        </Link>
                      </li>
                    ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetails;
