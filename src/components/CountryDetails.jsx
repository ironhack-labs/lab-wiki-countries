//import React, { useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
//import countries from '../countries.json';

function CountryDetails({ pays, setPays }) {
  const colStyle = { width: '30%' };
  //const [pays, setPays] = useState(countries);

  let { cca3 } = useParams();

  const country = pays.find((element) => element.alpha3Code === cca3);
  let flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;
  const borders = (name) => {
    if (country.borders.length === 0) {
      return <li>No Borders</li>;
    } else {
      return country.borders.map((element) => {
        return (
          <li>
            <Link key={country} to={'/' + element}>
              {pays.find((border) => border.alpha3Code === element).name.common}
            </Link>
          </li>
        );
      });
    }
  };

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1> <img src={flag} alt="flag" />
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={colStyle}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders(country.name.common)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
