import React from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries';

const CountryDetail = ({match}) => {
  const {code} = match.params;
  const getCountry = code => countries.filter(c => c.cca3 === code)[0];
  const country = getCountry(code);
  return (
    <div className="col-7">
      <h1><span className="emoji" role="img" aria-label="emoji">{country.flag}</span> {country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className={country.borders.length < 1 ? "noBorders" : ""}>
                { country.borders.length < 1 ? <li className="noDisc">This country does not have any registered borders</li> : country.borders.map(b => <li key={b}><NavLink to={`/countries/${b}`}>{getCountry(b).name.common}</NavLink></li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
