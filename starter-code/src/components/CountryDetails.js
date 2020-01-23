import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  let countryCode = props.match.params.countryCode;
  let myCountry = countries.filter(country => country.cca3 === countryCode)[0]
  
  const findNameByCode = (code) => {
    let rightCountry = countries.filter(country => country.cca3 === code)[0];
    return rightCountry.name.common;
  }

  return (
    <div className="col-7">
      <h1>{myCountry.name.common} {myCountry.flag}</h1>
      {myCountry.name.common === "Brazil" && <h4>"eh nois"</h4>}
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            {myCountry.capital[0] === "" && <td>No capital!</td>}
            <td>{myCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{myCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
                {myCountry.borders.length === 0 && <p>No borders!</p>}
              <ul>
                {
                  myCountry.borders.map((code, idx) => <li key={idx}><Link to={`/${code}`}>{findNameByCode(code)}</Link></li>)
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default CountryDetails;