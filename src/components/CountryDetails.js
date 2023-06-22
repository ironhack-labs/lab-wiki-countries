import { useState } from 'react';
import { useParams, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const { countryAlpha3Code } = useParams();

  //find countryDetails base on country.alpha3Code
  const countryDetails = props.countriesArr.find(
    (country) => country.alpha3Code === countryAlpha3Code
  );

  //find Name of border countries
  const borderCountriesAlpha3CodeArr = countryDetails.borders;
  const borderCountriesName = borderCountriesAlpha3CodeArr.map(
    (borderCountryAlpha3Code) => {
      const borderCountry = props.countriesArr.find(
        (country) => country.alpha3Code === borderCountryAlpha3Code
      );
      if (borderCountry) {
        return borderCountry.name.common;
      } else {
        return null;
      }
    }
  );

  return (
    <div className="col-7">
      <h1>{countryDetails.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>countryDetails.capital</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${countryDetails.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderCountriesAlpha3CodeArr.map((alpha3Code, index) => {
                  return (
                    <li>
                      <Link to={`/${alpha3Code}`}>
                        {borderCountriesName[index]}
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
