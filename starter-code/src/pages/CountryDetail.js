import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = props => {
  const [country] = countries.filter(country => country.cca3 === props.match.params.id);
  console.log(country.name.common);
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(i => (
                  <li>
                    <Link to={`/${i}`}>{i}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
