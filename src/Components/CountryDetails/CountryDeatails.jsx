import React from 'react';
import countries from '../../countries.json';
import { Route, Link } from 'react-router-dom';

const CountryDeatails = (props) => {
  const theCountryName = props.match.params.name;
  // console.log(theCountryName);
  const theCountry = props.countryDetails.find((country) => {
    return country.name.common === theCountryName;
  });

  // console.log(props.countryDetails);
  // console.log(theCountry);
  console.log(theCountry.borders);
  // console.log('these are the borders', theBorders);
  return (
    <div class="col-7">
      <h1>{theCountry.name.common}</h1>
      <table class="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{theCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {theCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {theCountry.borders.map((border) => {
                  const borderCountries = countries.find(
                    (country) => country.cca3 === border
                  );
                  return (
                    <li>
                      <Link
                        to={`/${borderCountries.name.common}`}
                        key={borderCountries.cca3}
                      >
                        {borderCountries.name.common}
                      </Link>
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

export default CountryDeatails;
