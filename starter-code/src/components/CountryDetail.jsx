import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

  const getCountry = () => {
   return countries.find((country) => props.match.params.id === country.cca3)
  }

  const country = getCountry();

  return (
    <div>
      <h1>{country.name.official}</h1>
      <table>
        <tbody>
          <tr><td>Capital</td><td>{country.capital}</td></tr>
          <tr><td>Área</td><td>{country.area} km²</td></tr>
          <tr><td>Borders</td>
            <td>
              <ul>
              {countries.filter((eachCountry) => country.borders.includes(eachCountry.cca3)).map((border) => <li>
                  <Link key={border.cca3} to={"/" + border.cca3}>{border.name.official}</Link>
              </li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail