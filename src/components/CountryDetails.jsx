import { Link } from 'react-router-dom';
import countriesData from '../countries.json';
import { useState } from 'react';

export default function CountryDetails(props) {
  const { countries } = props;
  const currentCountryId = props.match.params.alpha3code;

  const foundCountry = countries.find((countrieObj) => {
    return countrieObj.alpha3Code === currentCountryId;
  });

  console.log('found country', foundCountry);

  return (
    <div>
      <img
        src={
          'https:www.countryflags.io/' + countries.alpha2Code + '/flat/32.png'
        }
        className="countryImage"
      />
      <h1>{countries.name}</h1>
      <div className="col-7">
        <img src="https://restcountries.eu/data/fra.svg" alt="country flag" />
        <h1>{foundCountry.name}</h1>
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
                {foundCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                {foundCountry.borders.map((countryCode, i) => {
                  return (
                    <li key={'bordersid' + i}>
                      <Link to={`/${countryCode}`}>
                        {props.countries.map((country, i) => {
                          if (country.alpha3Code === countryCode) {
                            console.log('this is the country', country);
                            return <p key={'border' + i}>{country.name}</p>;
                          } else {
                            return null;
                          }
                        })}
                      </Link>
                    </li>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
