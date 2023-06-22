import { useState } from 'react';
import { useParams, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CountryDetails = (props) => {
  const { countryAlpha3Code } = useParams();
  const countryDetails = props.countriesArr.find(
    (country) => country.alpha3Code === countryAlpha3Code
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
                {countryDetails.borders.map((element) => {
                  return (
                    <li>
                      <Link to={`/${element}`}>{element}</Link>
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
