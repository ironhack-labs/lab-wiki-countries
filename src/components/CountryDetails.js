import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const countryId = props.match.params.countryId;
  console.log(countryId);
  const foundCountry = countries.find((country) => {
    return country.cca3 === countryId;
  });

  return (
    <div>
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
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
                  {foundCountry.borders.map((border) => {

                    const borderId = border;
                    const borderCountry = countries.find((country) => {
                      return country.cca3 === borderId;
                    });


                    return (
                      <li>
                        <Link to={`/${border}`}>{borderCountry.name.common}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
