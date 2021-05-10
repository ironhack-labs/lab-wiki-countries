import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom'

export default function CountryDetails(props) {
  const countryId = props.match.params.id;

  const country = countries.find(el => el.cca3 === countryId);

  let borders = country.borders.map(borderCountryShort => {
    let borderCountry = countries.find(border => border.cca3 === borderCountryShort)
    return (
      <li key={ borderCountryShort.cca3 }>
        <Link to={ `${borderCountryShort}` }>{ borderCountry.name.common }</Link>
      </li>
    )
  })

  return (
    <div>
      <h1>{ country.name.common }</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={ { width: '30%' } }>Capital</td>
            <td>{ country.capital }</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              { country.area } km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                { borders }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
