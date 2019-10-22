import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

  const getCountry = (cca3) => countries.find(e => e.cca3 === cca3)
  
  const { cca3 } = props.match.params;
  const foundCountry = getCountry(cca3)
  

  return (
    < div >
    <h1>{foundCountry.flag} {foundCountry.name.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {foundCountry.borders.map((elem, idx) => {
                const { name } = getCountry(elem)
                return <li><Link key={idx} to={elem}>{name.common}</Link></li>
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
      </div >
    )
}

export default CountryDetail;